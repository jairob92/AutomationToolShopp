import { expect } from '@playwright/test';
import { test, } from '../fixtures/baseFixture';

test('Check page title', async({page})=>{

 await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0')

})
