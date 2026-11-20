import {Locator,Page} from '@playwright/test';

export class LeftNavigationMenu{
    readonly page:Page;
    readonly pimLink:Locator;
    readonly orangeHrmLogo:Locator;
    readonly leftNavPanel:Locator;
    
    constructor(page:Page){
        this.page = page;
        this.pimLink = page.getByRole('link', { name: 'PIM' });
        this.orangeHrmLogo = page.locator('.oxd-brand-banner');
        this.leftNavPanel = page.locator('div.oxd-sidepanel-body');
    }
    /**
     * Opens the PIM module from the left navigation menu
     */
    async openPimModule(){
        await this.pimLink.click();
    }
}