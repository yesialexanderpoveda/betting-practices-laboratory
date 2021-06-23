const homeController = require('../../controllers/home')
const puppeteer = require('puppeteer');
module.exports.newValue = ''



if(`${homeController.a}`)
{
    
   (async function scrape() {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://betplay.com.co/apuestas#home');
    await page.waitForTimeout(3000);
    await page.click('#KambiBC-container .KambiBC-applied-terms__search-icon');
    await page.waitForSelector('#KambiBC-term-search-overlay__input');
    await page.type('#KambiBC-term-search-overlay__input', `${homeController.a}`);
    await page.waitForTimeout(3000);

    const enlaces = await page.evaluate(() => {
    const elements = document.querySelectorAll(".KambiBC-search-results-term__name");
        const links = [];

        for (let element of elements) {
            links.push(element.textContent)

        }

        return links;

    });
    
     console.log('Total de enlaces: ', enlaces.length);
   
     
     await browser.close();
     module.exports.nextToEnd = homeController.nextTo 
     module.exports.withEnlances = enlaces;
     const secondSearch = require('../modelScraping/secontSearch')
    
     })();
     
}



    