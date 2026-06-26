import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width':1280,'height':900})
        errors=[]
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('console', lambda msg: errors.append((msg.type, msg.text)) if msg.type=='error' else None)
        await page.goto('https://marios-debug.github.io/', wait_until='domcontentloaded')
        await page.evaluate('localStorage.setItem("theme", "dark")')
        await page.reload(wait_until='networkidle')
        await page.wait_for_timeout(2000)
        print('errors', errors)
        print('title', await page.title())
        print('body text len', len(await page.evaluate('document.body.innerText')))
        await page.screenshot(path='_live_dark.png', full_page=True)
        print('saved')
        await browser.close()

asyncio.run(main())
