import { expect } from "@playwright/test";
import { test } from "../fixtures/baseFixture";
import { ContactPage } from "../pages/contactPage";
import { NavBar } from "../pages/navBar";


test.beforeEach(async({page})=>{
    const navBar = new NavBar(page)
    await navBar.clickOnContact()
})

test('Should register contact form',async({page})=>{
    const contactPage= new ContactPage(page)
    await contactPage.typeFirstName('James')
    await contactPage.typeLastName('Bond')
    await contactPage.typeEmail('jay@test.com')
    await contactPage.selectSubjectValue('payments')
    await contactPage.typeMessage('I am able to type a short description into the textarea message')
    await contactPage.attachFile('resources/plain.txt','plain.txt')
    await contactPage.clickOnSendButton()
    expect(await page.locator('div.alert').innerText()).toContain('Thanks for your message')

})