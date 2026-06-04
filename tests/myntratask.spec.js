import { test, chromium , firefox} from '@playwright/test';

test ('locator',async({page}) =>{

await  page.goto('https://www.myntra.com/')
await page.click('//div[@class="desktop-navContent"][3]//a[@class="desktop-main"]')
await  page.click('//ul[@data-reactid="341"]//a[@data-reactid="345"]')

await page.waitForTimeout(1500);

const List0fProducts = await page.locator("//li[@class='product-base']/descendant::div[@class='product-price']//descendant::span[(@class='product-discountedPrice' or (text() and not(@class)))]");

//console.log(List0fProducts.length);
const Num_of_Product= await List0fProducts.allTextContents();


const AllProductProductprices = await List0fProducts.count();

const Productprices = Num_of_Product.map(Productprices =>Number(Productprices.match(/\d+/)));
console.log("Product list based on price :",Productprices);
console.log("Number of procduct  :" , AllProductProductprices);



let Num= Infinity;
for(let i=0;i<AllProductProductprices;i++){
  const Mininum_Value= Productprices[i];
  if(Mininum_Value<Num){
    Num=Mininum_Value
    
  }

}

console.log("Mininum Price:",Num);
await page.click(`//li[@class='product-base']/descendant::div[@class='product-price']//descendant::span[(@class='product-discountedPrice' and text()='${Num}') or (text()='${Num}' and not(@class))]`);
await page.waitForTimeout(1500);
const Mininum_Value_Product_Brand = await page.locator(`//li[@class='product-base']/descendant::div[@class='product-price']//descendant::span[(@class='product-discountedPrice' and text()='${Num}') or (text()='${Num}' and not(@class))]//ancestor::div/h3[@class='product-brand']//following-sibling::h4[@class='product-product']`).allTextContents();
console.log("Minimum value Brand:", Mininum_Value_Product_Brand[0])
const Mininum_Value_Exact_Product = await page.locator(`//li[@class='product-base']/descendant::div[@class='product-price']//descendant::span[(@class='product-discountedPrice' and text()='${Num}') or (text()='${Num}' and not(@class))]//ancestor::div/h4[@class='product-product']`).allTextContents();
console.log("Minimum value productName:", Mininum_Value_Exact_Product[0])

})