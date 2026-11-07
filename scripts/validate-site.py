"""Validate this buildless site without a browser or network access."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json, subprocess, sys

root = Path(__file__).resolve().parents[1]
errors = []

class Document(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path, self.ids, self.links, self.project_ids = path, set(), [], set()
        self.stack = []
        self.void = {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}
        self.feed(path.read_text(encoding='utf-8'))
        if self.stack:
            errors.append(f'{path.name}: unclosed elements: {self.stack}')
    def handle_starttag(self, tag, attributes):
        a = dict(attributes)
        if tag not in self.void:
            self.stack.append(tag)
        if a.get('id'):
            if a['id'] in self.ids:
                errors.append(f'{self.path.name}: duplicate id {a["id"]}')
            self.ids.add(a['id'])
        for key in ('href', 'src'):
            if a.get(key): self.links.append(a[key])
        if a.get('target') == '_blank' and not ({'noopener','noreferrer'} & set(a.get('rel','').split())):
            errors.append(f'{self.path.name}: new tab missing rel: {a.get("href")}')
    def handle_startendtag(self, tag, attributes):
        self.handle_starttag(tag, attributes)
        if tag not in self.void: self.handle_endtag(tag)
    def handle_endtag(self, tag):
        if tag in self.void: return
        if not self.stack or self.stack[-1] != tag:
            errors.append(f'{self.path.name}: unexpected closing {tag}; current {self.stack[-3:]}')
        else: self.stack.pop()

documents = {p.name: Document(p) for p in root.glob('*.html')}
for document in documents.values():
    for link in document.links:
        parts = urlsplit(link)
        if parts.scheme or parts.netloc: continue
        target = (document.path.parent / unquote(parts.path)).resolve() if parts.path else document.path
        if not target.exists(): errors.append(f'{document.path.name}: missing local target {link}')
        if parts.fragment and target.name in documents and parts.fragment not in documents[target.name].ids:
            errors.append(f'{document.path.name}: missing anchor {link}')

# Node can parse the browser scripts and inspect the shared project catalogue.
node = sys.argv[1] if len(sys.argv) > 1 else 'node'
js = r'''
const fs = require('fs'), vm = require('vm');
for (const file of fs.readdirSync('assets/js').filter(f => f.endsWith('.js'))) {
  new vm.Script(fs.readFileSync('assets/js/' + file, 'utf8'), { filename: file });
}
const ctx = vm.createContext({});
vm.runInContext(fs.readFileSync('assets/js/projects-data.js', 'utf8') + fs.readFileSync('assets/js/school-progress.js', 'utf8') + ';this.catalogue = { projects: projectData, entries: portfolioEntries, translations: portfolioTranslations };this.invalid = getProjectById("__proto__");', ctx);
if (ctx.invalid !== null) throw Error('Inherited object keys must not resolve as projects');
process.stdout.write(JSON.stringify(ctx.catalogue));
'''
result = subprocess.run([node, '-e', js], cwd=root, capture_output=True, text=True, encoding='utf-8')
if result.returncode:
    errors.append('JavaScript: ' + result.stderr)
else:
    catalogue = json.loads(result.stdout)
    entries, projects = catalogue['entries'], catalogue['projects']
    if len({e['id'] for e in entries}) != len(entries): errors.append('Duplicate project metadata')
    if len([e for e in entries if e.get('featured')]) != 6: errors.append('Expected six selected projects')
    home = (root/'index.html').read_text(encoding='utf-8')
    for entry in entries:
        if f'project.html?id={entry["id"]}' not in home: errors.append(f'Project is not reachable: {entry["id"]}')
        p = projects[entry['id']]
        for url in [p.get('img'), p.get('pdf')] + [x['url'] for x in p.get('evidence', [])] + p.get('details', {}).get('gallery', []):
            if url and not urlsplit(url).scheme and not (root/unquote(url)).exists(): errors.append(f'{entry["id"]}: missing evidence {url}')
    keys = set(catalogue['translations']['en'])
    for lang, values in catalogue['translations'].items():
        if set(values) != keys: errors.append(f'Uneven refresh translations: {lang}')
    if 'cdn.jsdelivr.net/npm/marked' in home: errors.append('Unexpected external reflection renderer')
    if 'href="https://github.com/"' in home: errors.append('Placeholder GitHub link')
    if 'http://138.' in (root/'assets/evidence/server-dashboard.py.txt').read_text(encoding='utf-8'): errors.append('School metrics endpoint exposed')
    print(f'Checked {len(documents)} HTML pages, {len(entries)} case studies, 3 refresh language dictionaries and all local evidence/assets.')

if errors:
    print('\n'.join(errors), file=sys.stderr)
    raise SystemExit(1)
print('Static checks passed. Browser layout and interaction checks are separate.')
