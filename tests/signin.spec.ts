import {expect} from "@playwright/test";
import { NavBar } from "../pages/navBar";
import { CustomerRegistrationPage } from "../pages/customerRegistrationPage";
import { SignInPage } from "../pages/SignInPage";
import { test } from "../fixtures/baseFixture";
import {faker} from '@faker-js/faker'

test.describe.configure({ mode: "serial" });

let email = "";

test.beforeEach(async({page})=>{
    const navBar = new NavBar(page)
    await navBar.clickOnSignIn()
})

test("Should register new customer",async({page})=>{
    const signinPage = new SignInPage(page)
    const customerRegistrationPage= new CustomerRegistrationPage(page)
    email= faker.internet.email()
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
    await customerRegistrationPage.typeEmail(email)
    await customerRegistrationPage.typePassword('Test321x_')
    await customerRegistrationPage.clickOnRegisterButton()
    expect(page.url().includes('/auth/login'))
    await expect(page.getByRole('button',{name:'Sign in with Google'})).toBeVisible()
  
});

test("Should login as a customer",async({page})=>{
    const signinPage = new SignInPage(page)
    const customerRegistrationPage= new CustomerRegistrationPage(page)
    expect(page.url().includes('/auth/login'))
    await signinPage.typeEmail(email)
    await signinPage.typePassword('Test321x_')
    await signinPage.clickOnLoginButton()
    expect(page.url().includes('/account'))
    const pageTitle= await page.locator("xpath=//h1[@data-test='page-title']").innerText()
    console.log(pageTitle)
    expect(pageTitle).toEqual('My account')
    
})
