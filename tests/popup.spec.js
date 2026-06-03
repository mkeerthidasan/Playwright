import { test, chromium , firefox} from '@playwright/test';


test('popup handling',async({page}) => {
    await page.goto('https://demoqa.com/alerts');
    // popup -> javascript popup(alerts) -> we cannot inspect it
    //type of alerts
    // simple -> 'OK'  button
    //confirm -> 'OK and 'CANCEL'
    //prompt -> 'TEXTBOX'

    // Page.on('dialog')

     page.on('dialog',async ({dialog}) => {
console.log(await dialog.message());
console.log(await dialog.type());

    //     await dialog.accept('nithees'); // to press ok
    //     await dialog.dismiss(); // to press cancel
    // })

    await page.click('');
    await page.waitForTimeout(1500);
     })
})

//popup

//const popup = await page.waitForEvent('popup');
//await.locator()

//Mouse actions

// page.click();
// page.click({ button : "right'"}); -> move the mouse action right to left
//pade.hover(); -> move the dropdown selection (EX: login icon below option)
//page.bdlClick(); -> to double click to select 
//const sorce =page.locator('source')
// sorce.dragTo('target');
//page.mouse.wheel(0,0); -> Scroll the mouse from x,y (EX: up and down)
// page.mouse.move(0,0);
//page.mouse.up();
//page.mouse.down();
