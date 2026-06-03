import { test, chromium ,} from '@playwright/test';

// test ("Frame",async({page}) => {
//  // To find the frame in DOM using (//iframe)
//  // iframe -> tagname

//  // page.framelocator() -> it can process like locator() 

//  await page.goto("https://demo.automationtesting.in/Frames.html");


// })

test ('handlin windows',async ({browser})=>{

    const context= await browser.newContext(); 
    const page = await context.newPage();
    
    await page.goto("https://www.amazon.in/");
    await page.locator("twotabsearchtextbox").fill("iphonne");
    await page.keyboard.press('Enter');

    const product= await page.locator('aria-label="Sponsored Ad - iPhone 17 Pro 256 GB: 15.93 cm (6.3″) Display with Promotion up to 120Hz, A19 Pro Chip, Breakthrough Battery Life, Pro Fusion Camera System with Center Stage Front Camera; Cosmic Orange"');
    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        page.click(product)
    ])
    await newTab.waitForLoadState();

})

//context.page(); -> to get all details from the window tap