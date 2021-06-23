
const puppeteer = require('puppeteer');

const tennista = 'Rafael Nadal';

(async function scrape() {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://m.codere.com.co/deportescolombia/#/HomePage');
    await page.click('.alert-button-default-md');



})();


