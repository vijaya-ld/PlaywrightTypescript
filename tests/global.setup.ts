import {test} from '../fixtures/common-fixtures';
import {expect} from '@playwright/test';

test("Global setup for Auto Login", async({page,loginPage,commonUtils,dashboardPage})=>{
    const decryptedUser = commonUtils.decryptData('U2FsdGVkX18t9+6zWpcI256qjqioC59g3oXi+DKhtPw=');
    const decryptedPassword = commonUtils.decryptData('U2FsdGVkX18TfUDF4yE/lYWWLNK7rfmjNnbe0mIm9Os=');
    
    await loginPage.gotoOrangeHrm();
    await loginPage.loginOrangeHrm(decryptedUser, decryptedPassword);

    await page.waitForURL(process.env.BASE_URL+'/web/index.php/dashboard/index');
    await expect(dashboardPage.dashboardTitleText).toHaveText("Dashboard");
    await page.context().storageState({path:'./playwright/.auth/auth.json'});
});