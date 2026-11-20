// import {test} from '@playwright/test'
// import { LoginPage } from '../pages/LoginPage'

// test("Temp test",async({page})=>{
//     const loginPage = new LoginPage(page);
//     await loginPage.gotoOrangeHrm();
//     await loginPage.loginOrangeHrm('Admin','admin123');
// })

import { test } from '../fixtures/hooks-fixtures';
import { LoginPage } from '../pages/LoginPage';
import commonUtils from '../utils/commonUtils';
import { expect } from '@playwright/test';

// test.beforeEach(async ({ page, loginPage }) => {
//     await loginPage.gotoOrangeHrm();
// })

// test.afterEach(async ({ page, userPage }) => {
//     await userPage.logout();
// })

test("loginPage Test", async ({ page, gotoUrl}) => {
    // console.log(process.env.BASE_URL);
    // console.log(process.env.USER_NAME);
    // console.log(process.env.PASSWORD);

    //const commonUtilsObj = new commonUtils();

    // const decryptedUser = commonUtils.decryptData('U2FsdGVkX18t9+6zWpcI256qjqioC59g3oXi+DKhtPw=');
    // const decryptedPassword = commonUtils.decryptData('U2FsdGVkX18TfUDF4yE/lYWWLNK7rfmjNnbe0mIm9Os=');

    //console.log(decryptedUser);
    //console.log(decryptedPassword);

    //await loginPage.gotoOrangeHrm();
    //await loginPage.loginOrangeHrm(decryptedUser, decryptedPassword);
    console.log(await page.title());
})

test("loginPage Test 2", async ({ page, gotoUrl }) => {
    await expect(page).toHaveTitle('OrangeHRM');
})

test("loginPage Test 3", async ({ page, gotoUrl,logout }) => {
    await expect(page).toHaveTitle('OrangeHRM');
})