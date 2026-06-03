import { test, chromium ,} from '@playwright/test';

test('open amazon url', async({page}) => {

    await page.goto("https://www.amazon.in/");
    await page.hover('//*[@id="nav-link-groceries"]/a/span');
    await page.waitForTimeout(2000);
})k