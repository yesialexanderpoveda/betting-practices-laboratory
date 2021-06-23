const pptrFirefox = require('puppeteer-firefox');

(async () => {
  const browser = await pptrFirefox.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('https://www.betfair.com.co');
  await page.waitFor(3000);
  await browser.close();
})();