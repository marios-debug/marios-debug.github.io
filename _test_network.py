import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width':1280,'height':900})
        failed=[]
        page.on('requestfailed', lambda req: failed.append((req.url, req.failure_error_string)))
        page.on('response', lambda resp: failed.append((resp.url, resp.status)) if resp.status >= 400 else None)
        await page.goto('https://marios-debug.github.io/', wait_until='networkidle')
        await page.wait_for_timeout(2000)
        print('failed', failed)
        await browser.close()

asyncio.run(main())
