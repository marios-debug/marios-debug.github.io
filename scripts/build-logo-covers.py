"""Place unchanged brand assets on consistent 640 x 360 project-cover canvases."""
from pathlib import Path
import base64
from html import escape

root = Path(__file__).resolve().parents[1]
images = root / "assets/img"
covers = images / "covers"


def image(filename, x, y, width, height):
    source = images / filename
    mime = "image/svg+xml" if source.suffix == ".svg" else "image/png"
    encoded = base64.b64encode(source.read_bytes()).decode("ascii")
    return (f'<image x="{x}" y="{y}" width="{width}" height="{height}" '
            f'preserveAspectRatio="xMidYMid meet" href="data:{mime};base64,{encoded}"/>')


def save(project_id, title, background, content):
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" '
           f'viewBox="0 0 640 360" role="img" aria-label="{escape(title)}">\n'
           f'  <title>{escape(title)}</title>\n'
           f'  <rect width="640" height="360" fill="{background}"/>\n'
           f'  {content}\n</svg>\n')
    (covers / f"{project_id}.svg").write_text(svg, encoding="utf-8")


save("chef", "Official Progress Chef logo", "#ffffff",
     image("chef-logo-official.svg", 80, 100, 480, 160))
save("awssecurity", "Official AWS logo", "#ffffff",
     image("aws-logo-official.svg", 200, 100, 240, 160))
save("terraformazure", "Azure and Terraform logos", "#ffffff",
     image("azure-logo-official.svg", 128, 76, 144, 144)
     + image("terraform-logo-official.svg", 368, 76, 144, 144)
     + '<g fill="#2d3033" font-family="Arial, sans-serif" font-size="28" '
       'font-weight="600" text-anchor="middle">'
       '<text x="200" y="274">Azure</text>'
       '<text x="440" y="274">Terraform</text></g>')
save("networkmonitoring", "Official Zabbix logo", "#ffffff",
     image("zabbix-logo-official.svg", 96, 120, 448, 120))
save("autovault", "AutoVault wordmark", "#0a0a0a",
     image("autovault-thumb.png", 48, 100, 544, 160))
print("Built five 16:9 covers with unchanged, uncropped source assets.")
