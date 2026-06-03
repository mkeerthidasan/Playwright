import { test, chromium ,} from '@playwright/test';

test('has title', async({page})=>{

    await page.goto('https://demoqa.com/webtables');
    const rows = await page.locator('//table/tbody/tr').all();
    const tableData =[];
    for(const row  of rows){
        const text= await row.locator('td').allTextContents();
    
    if(text.join('').trim()!==''){
        tableData.push({
            firstName:text[0],
            lastName:text[1]
        })
    }
}
    console.table(tableData);

    // const rowCount =await rows.count();
    // console.log(rowCount);
    // const columnCount = await rows.locator('td').count();
    // console.log(columnCount);

    // for(let i=0;i<rowCount;i++){
    //     const text= await rows.locator('td').nth(i).innerText();
    // console.table(text);
    // }
    

});
