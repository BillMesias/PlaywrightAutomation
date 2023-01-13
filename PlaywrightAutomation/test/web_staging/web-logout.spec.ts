import { expect } from '@playwright/test';
import { test } from '../../../fixture/object_fixture';

test.describe(`Site visit` , () => {
    test.beforeEach(async ({ page }) => {
    await page.goto(`http://web-staging.aonewallet.com/`);
});
    
test(`Log out`, async( {page , webLogIn} ) =>{
    await webLogIn.LogIn();
    await webLogIn.ValidLogIn();
    await page.locator(`//img[@class='chakra-image css-y3gv0i']`).isVisible();
    await webLogIn.Exit();
});

});