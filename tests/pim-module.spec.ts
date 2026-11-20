import {test,expect} from '../fixtures/hooks-fixtures';
import PimModuleData from '../data/pim-module-data.json';

test('[PIM] Verify that the user can add a new employee',async({gotoUrl,loginPage,leftNavigationMenu,pimPage,commonUtils})=>{
    await test.step('open PIM Module',async()=>{
        await leftNavigationMenu.openPimModule();
    });
    
    await test.step('Add a new employee',async()=>{
        await pimPage.addEmployee(PimModuleData.firstName, PimModuleData.middleName, PimModuleData.lastName);
    });
    await expect(pimPage.newEmployeeNameHeading).toHaveText(`${PimModuleData.firstName} ${PimModuleData.lastName}`);

});
    