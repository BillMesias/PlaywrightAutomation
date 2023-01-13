import { Locator,Page } from '@playwright/test';
 

export default class WebLogIn {
    webLogInBtn: Locator;
    webLogInModal: Locator;
    webLogInUser: Locator;
    webLogInPass: Locator;
    webLogInBtn2: Locator;
    webPopUp: Locator;
    webMenu: Locator;
    webLogOut: Locator;
    webLogOutPopUp: Locator;
    footer: Locator
    footer2: Locator

    constructor (public page: Page) {
        this.page = page;
        this.webLogInBtn = this.page.locator(`//button[text()='Login']`)
        this.webLogInModal = this.page.locator(`(//div[@id='chakra-modal--body-4']//div)[1]`)
        this.webLogInUser = this.page.locator(`//input[@placeholder='Username']`)
        this.webLogInPass = this.page.locator(`//input[@placeholder='Password']`)
        this.webLogInBtn2 = this.page.locator(`//button[@type='submit']`)
        this.webPopUp = this.page.locator(`(//div[text()='Successfully Authenticated'])[1]`)
        this.webLogOut = this.page.locator(`//div[text()='Logout']`)
        this.webLogOutPopUp = this.page.locator(`(//div[text()='Successfully Logged out'])[1]`)
        this.webMenu =this.page.getByRole('button', { name: 'Profile Options' })
        this.footer = this.page.locator(`//div[@class='chakra-container']`)
        this.footer2 = this.page.locator(`//div[@class='chakra-container']`)
    }
    async LogIn () {
        await this.webLogInBtn.isVisible();
        await this.webLogInBtn.click();
        await this.webLogInModal.isVisible();
    }

    async ValidLogIn () {
        await this.webLogInUser.fill(`e2etestbill`);
        await this.webLogInPass.fill(`password`);
        await this.webLogInBtn2.click();
        await this.webPopUp.isVisible();   
    }
    async Exit () {
        await this.webMenu.click();
        await this.webLogOut.click();
        await this.webLogOutPopUp.isVisible();
    }
   ;
    }


    
    
    
