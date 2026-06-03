import { test, chromium } from '@playwright/test';


// Inbulit locator

    // 1. getByTestId() -> attribute
    //2. getByText()    -> text
    // 3. getByPlaceholder() -> attribute
    // 4.getByAltText() -> attribute
    // 5. getByTitle() -> attribute
    // 6. getByLable() -> attribute
    // 7. getByRole() -> role based locator 
            // syntax :
                // await page.getByRole('button,{name : 'valeu'});
                //(for excat value)
                // await page.getByRole('button,{name : 'valeu'},excat :true);
