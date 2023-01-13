import { test as objectFixture } from '@playwright/test';
import WebLogIn from '../page-objects/web-log-in.page';



type Pages = {
    
    webLogIn: WebLogIn;
    
    
  
};

const testObjects = objectFixture.extend<Pages>({

  webLogIn: async ({ page }, use) =>{
    await use(new WebLogIn(page))
  },

});

export const test = testObjects;