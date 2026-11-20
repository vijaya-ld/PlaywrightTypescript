import {test,expect} from '../fixtures/hooks-fixtures';
import LoginModuleData from '../data/login-module-data.json';

test.use({storageState:{
    cookies:[],
    origins:[]
}});

test('[Login] Verify that the user cannot login with an invalid password',{
    tag:['@UI','@UAT','@DEV'],
    annotation:{
        type:'Test case link',
        description:'https://wishinfinite.atlassian.net/browse/ORANGE-1'
    }
},async({gotoUrl,loginPage,commonUtils})=>{
    const userName = commonUtils.decryptData(process.env.USER_NAME!);
    await loginPage.loginOrangeHrm(userName,LoginModuleData.wrong_password);
    
    await expect(loginPage.invalidCredentialError).toHaveText(LoginModuleData.invalidErrorMessage);
    await expect(loginPage.userNameInput).toBeVisible();
});

test('[Login] Verify that the user cannot login with an invalid UserName',{tag:['@UI','@UAT'],
    annotation:{
        type:'Test case link',
        description:'https://wishinfinite.atlassian.net/browse/ORANGE-2'
    }
},async({gotoUrl,loginPage,commonUtils})=>{
    const password = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPage.loginOrangeHrm(LoginModuleData.wrong_username,password);
    
    await expect(loginPage.invalidCredentialError).toHaveText(LoginModuleData.invalidErrorMessage);
    await expect(loginPage.userNameInput).toBeVisible();
});

test('[Login] Verify that the user cannot login with both invalid UserName and invalid Password',{tag:['@UI','@DEV'],
    annotation:{
        type:'Test case link',
        description:'https://wishinfinite.atlassian.net/browse/ORANGE-3'
    }
},async({gotoUrl,loginPage,commonUtils})=>{
    
    await loginPage.loginOrangeHrm(LoginModuleData.wrong_username,LoginModuleData.wrong_password);
    
    await expect(loginPage.invalidCredentialError).toHaveText(LoginModuleData.invalidErrorMessage);
    await expect(loginPage.userNameInput).toBeVisible();
});

test('[Login] Verify that the user can login with valid UserName and password',{
    tag:['@VISUAL','@UAT'],
    annotation:{
        type:'Test case link',
        description:'https://wishinfinite.atlassian.net/browse/ORANGE-4'
    }
},async({gotoUrl,loginPage,commonUtils,leftNavigationMenu})=>{
    const userName = commonUtils.decryptData(process.env.USER_NAME!);
    const password = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPage.loginOrangeHrm(userName,password);
    await expect(leftNavigationMenu.orangeHrmLogo).toHaveScreenshot('orange-hrm-logo.png');
    await expect(leftNavigationMenu.leftNavPanel).toHaveScreenshot('left-nav-panel.png');
    await expect(loginPage.page).toHaveURL(`${process.env.BASE_URL}/web/index.php/dashboard/index`);

});