
const puppeteer = require('puppeteer');


const betplay = function betplay() {

   const tennista = 'Nadal, Rafael';
   (async function scrape() {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      await page.goto('https://betplay.com.co/apuestas#home');
      await page.click('#KambiBC-container .KambiBC-applied-terms__search-icon');

      await page.waitForSelector('#KambiBC-term-search-overlay__input');
      await page.type('#KambiBC-term-search-overlay__input', tennista);
      await page.waitFor(3000);

      const enlaces = await page.evaluate(() => {

         const elements = document.querySelectorAll(".KambiBC-search-results-term");

         const links = [];
         for (let element of elements) {
            links.push(element.textContent)

         }

         return links;

      });

      console.log(enlaces);
      const books = [{ 'ewewe': 'dsadsa' }, {}];
      console.log(books)

      await page.click('.KambiBC-term-search-overlay__result-content li span');

   })();
}

module.exports = betplay;