import {expect} from "@playwright/test";
import { NavBar } from "../pages/navBar";
import { CustomerRegistrationPage } from "../pages/CustomerRegistrationPage";
import { SignInPage } from "../pages/SignInPage";
import { test } from "../fixtures/baseFixture";

test.beforeEach(async({page})=>{
    const navBar = new NavBar(page)
    await navBar.clickOnSignIn()
})

test("Should register new customer",async({page})=>{
    const signinPage = new SignInPage(page)
    const customerRegistrationPage= new CustomerRegistrationPage(page)
    expect(page.url().includes('/auth/login'))
    await signinPage.clickOnRegisterAccountLink()
    expect(page.url().includes('/auth/register'))
    await customerRegistrationPage.typeFirstName('Adam')
    await customerRegistrationPage.typeLastName('Smith')
    await customerRegistrationPage.typeDob('1990-12-12')
    await customerRegistrationPage.typeStreet('Street dom')
    await customerRegistrationPage.typePostalCode('A2F239')
    await customerRegistrationPage.typeCity('Bmanga')
    await customerRegistrationPage.typeState('Az')
    await customerRegistrationPage.selectCountry('CA')
    await customerRegistrationPage.typePhone('2312321')
    await customerRegistrationPage.typeEmail('test@mail.com')
    await customerRegistrationPage.typePassword('test123124')
    await page.pause()

    
});