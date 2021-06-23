const puppeteer = require('puppeteer');

exports.searchOne = async (req, res, next) =>{

    res.json(req.body.filterData)

    module.exports.nextTo = next;
      
    module.exports.a = req.body.filterData;
  
    const indexjs = require('../scraping/modelScraping/firstSearch');
    
    indexjs.newValue = req.body.filterData;
  
  
    console.log(indexjs.newValue, 'no error')
  
    }

    exports.searchSecont = (req, res,) =>{
        console.log(':) search second')
        
         }

  
      



        /*(async function scrape() {
        
            const browser = await puppeteer.launch({ headless: false });
            const page = await browser.newPage();
            await page.goto('https://betplay.com.co/apuestas#home');
            await page.click('#KambiBC-container .KambiBC-applied-terms__search-icon');
            await page.waitForSelector('#KambiBC-term-search-overlay__input');
            await page.type('#KambiBC-term-search-overlay__input', search_one);
            await page.waitForTimeout(3000);
        
            const enlaces = await page.evaluate(() => {
            const elements = document.querySelectorAll(".KambiBC-search-results-term__name");
                const links = [];
               for (let element of elements) {
                    links.push(element.textContent)
                }
                return links;
            });
              for(let finding of enlaces){
                     if(finding === 'Zapata, Duván (Colombia)'){
                         
                      const found = `${finding}`
                        console.log('found', ':)' , found )
                           await page.$eval('#KambiBC-term-search-overlay__input', el => el.value = '');
                           page.waitForTimeout(3000)
                           await page.type('#KambiBC-term-search-overlay__input', found);
                     }else{ }
              }     
            
            console.log('Total de enlaces: ', enlaces.length+enlaces);
            
            await browser.close();
        
            
        })();
   
    }
    
}*/
