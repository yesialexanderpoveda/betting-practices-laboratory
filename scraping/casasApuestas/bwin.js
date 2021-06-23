const puppeteer = require("puppeteer");

//https://sports.bwin.co/es/sports
(async () => {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://sports.bwin.co/es/sports');

})