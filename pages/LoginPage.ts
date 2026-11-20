import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    readonly userNameInput:Locator;
    readonly passwordInput :Locator;
    readonly loginButton : Locator;
    readonly invalidCredentialError : Locator;

    constructor(page:Page){
        this.page = page;
        this.userNameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.invalidCredentialError = page.getByText('Invalid credentials');
    }

    /**
     * To Open Website URL in Browser
     */
    async gotoOrangeHrm(){
        await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
    }

    /**
     * To Login to OrangeHrm
     * @param userName
     * @param password
     * 
     */
    async loginOrangeHrm(userName:string,password:string){
        //userName='Admin';
        //password ='admin123';
        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}