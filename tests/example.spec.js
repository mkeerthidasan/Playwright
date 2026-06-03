// @ts-check
import { test, chromium , firefox} from '@playwright/test';
// import { AsyncLocalStorage } from 'async_hooks';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
// // page opening




//Dropdown
//test('handling dropdown',async({page})=> {
  //dropdown ->list of values inside a single element
  // actual dropdown -> <select>  -> tgname
  // custom dropdown -> not in select tag
  // page.selectoption() -> to handle dropdown.
  
  

//   test('Opening amazon Url',async({page})=>{

//    await page.goto('https://www.amazon.in/');
//    await page.waitForTimeout(1000);
//    // Locators
//    await page.locator("input#twotabsearchtextbox"). fill ,"laptops";
//   await page.waitForTimeout(8000);

// });

//record  video and handling

// test('recode video and handling',async()=> {
// // page opening  for new window in browser syntax
// const browser = await chromium.launch();
// const context = await browser.newContext({recordVideo:{
//   dir : '/recorder/'
// }});

//file upload

// const page= await context.newPage();
//  await page.goto ("https://demoqa.com/upload-download")
//  await page.setInputFiles('#upload file',"C:\Users\ManoKali\Downloads\rrb-signature-fixed.jpg");
//  //await page.setInputFiles('#upload file', []);
//  await page.waitForTimeout(4000);
//  await context.close();

//  await page.click('#Button');
//  await page.waitForEvent('download');

// const d = await Promise.all([
//   page.waitForEvent('download'),
//   page.click('')
// ])

// await d.saveAS('./download/image.jepg');
test ('locator',async({page}) =>{

await  page.goto('https://www.myntra.com/')
await page.click('//div[@class="desktop-navContent"][3]//a[@class="desktop-main"]')
await  page.click('//ul[@data-reactid="341"]//a[@data-reactid="345"]')

await page.waitForTimeout(1500);

// const AllProduct= await page.locator('//li[@class="product-base"]');
// const ProductList = AllProduct.allTextContents();
// const Productprices= AllProduct.count();
// await page.waitForTimeout(1500);

const List0fProducts = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]');


const Num_of_Product= await List0fProducts.allTextContents();


const AllProductProductprices = await List0fProducts.count();

//const Productprices = Num_of_Product.map(prices=>prices.slice(4,7));
console.log("Product list based on price :",Num_of_Product);
console.log("Number of procduct  :" , AllProductProductprices);

 

// let Num= Infinity;
// for(let i=0;i<AllProductProductprices;i++){
//   const Mininum_Value=Number(await Productprices[i].match(/[0-9]+/g));
//   if(Mininum_Value<Num){
//     Num=Mininum_Value
    
//   }

// }

// console.log("Mininum Price:",Num);
// await page.locator(`//ul[@class='results-base']/descendant::div[@class='product-price' and text() ='${Num}']`).click;
// await page.waitForTimeout(500);
//const Mininum_Value_Product_Brand = await page.locator(`//ul[@class='results-base']/descendant::div[@class="product-price"]//descendant::span[@class="product-discountedPrice" or (text() = '${Num}' and not(@class))]/ancestor::div/h3[@class='product-brand']`).allTextContents();
// const Mininum_Value_Product_Brand = await page.locator(`//ul[@class='results-base']/descendant::span[@class="product-discountedPrice" and text() ='${Num}']/ancestor::div/h3[@class='product-brand']`).allTextContents();


// console.log("Minimum value product:", Mininum_Value_Product_Brand[0])

})




  