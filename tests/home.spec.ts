import { expect } from '@playwright/test';
import { test, } from '../fixtures/baseFixture';
import { HomePage } from '../pages/homePage'; // <-- added import


test('Check page title', async({page})=>{
 await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0')

})

test('Check at least on product is listed',async({page})=>{
    const homePage= new HomePage(page)
    const productCard=  page.locator('.card')
    await expect(productCard.first()).toBeVisible()
})

