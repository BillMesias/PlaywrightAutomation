import { expect } from '@playwright/test';
import { test } from '../../../fixture/object_fixture';

test.describe(`Site visit` , () => {
    test.beforeEach(async ({ page }) => {
    await page.goto(`http://web-staging.aonewallet.com/`);
});
    
test(`Successfull LogIn`,async ({webLogIn}) => {
    await webLogIn.LogIn();
    await webLogIn.ValidLogIn();
    
    });
test(`Invalid Credentials`,async({page,webLogIn}) => {
    await webLogIn.LogIn();
    await page.getByPlaceholder('Username').fill("*******");
    await page.getByPlaceholder('Password').fill("*******");
    await page.getByRole(`button`, { name: `Login` }).click();
    await page.getByText('Your details have not been found. Please try again or click Forgot Password to').isVisible();
    });
test(`Empty Credentials` ,async({page,webLogIn}) =>{
    await webLogIn.LogIn();
    await page.locator(`//span[text()='Remember me']`).isVisible();
    await page.locator(`//button[@type='submit']`).isVisible();
    await page.locator(`//button[@type='submit']`).click();
    await page.locator(`text=Username is required`).isVisible();
    await page.locator(`text=Password is required`).isVisible();
    });



});
