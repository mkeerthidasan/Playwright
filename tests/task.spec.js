import { test, chromium ,} from '@playwright/test';

test('open yahoo url', async({page}) => {
    await page.goto("https://in.search.yahoo.com/");
    const TrendingName = await page.locator('(//span[text() ="Trending now"]/ancestor::div[@class="layoutTop"]/following-sibling::div[@class="layoutMiddle"]/descendant::a)[5]').allTextContents();
    console.log("TRENDING NAME :", TrendingName);

})