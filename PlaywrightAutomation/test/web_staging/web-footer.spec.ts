import { expect } from '@playwright/test';
import { test } from '../../../fixture/object_fixture';

test.describe(`Site visit` , () => {
    test.beforeEach(async ({ page }) => {
    await page.goto(`http://web-staging.aonewallet.com/`);
});
    
test(`Footer SITE INFORMATION cta About Us`, async( {page , webLogIn} ) =>{
    await webLogIn.LogIn();
    await webLogIn.ValidLogIn();
    await page.locator(`//h3[text()='SITE INFORMATION']`).isVisible();
    await page.locator(`//p[text()='About Us']`).click();
    await expect(page).toHaveURL(`http://web-staging.aonewallet.com/aboutus`);  
});
test(`Footer SITE INFORMATION cta Contact Us`, async( {page , webLogIn} ) =>{
    await webLogIn.LogIn();
    await webLogIn.ValidLogIn();
    await page.locator(`//h3[text()='SITE INFORMATION']`).isVisible();
    await page.locator(`//p[text()='Contact Us']`).click();
    await expect(page).toHaveURL(`http://web-staging.aonewallet.com/contact-us`);  
});
test(`Footer SITE INFORMATION cta Privacy Policy`, async( {page , webLogIn} ) =>{
    await webLogIn.LogIn();
    await webLogIn.ValidLogIn();
    await page.locator(`//h3[text()='SITE INFORMATION']`).isVisible();
    await page.locator(`//p[text()='Privacy Policy']`).click();
    await expect(page).toHaveURL(`http://web-staging.aonewallet.com/privacy-policy`);  
});
test(`Footer SITE INFORMATION cta Deposit & Withdrawals`, async( {page , webLogIn} ) =>{
    await webLogIn.LogIn();
    await webLogIn.ValidLogIn();
    await page.locator(`//h3[text()='SITE INFORMATION']`).isVisible();
    await page.locator(`//p[text()='Deposit & Withdrawals']`).click();
    await expect(page).toHaveURL(`http://web-staging.aonewallet.com/depositandwithdrawal`);  
});

});