import { Locator, Page } from "@playwright/test";

export class SignInPage {

    private readonly emailInput:Locator
    private readonly passwordInput:Locator
    private readonly LoginButton:Locator
    private readonly registerAccountLink:Locator

    constructor(page:Page){
        this.emailInput=page.getByTestId('email')
        this.passwordInput=page.getByTestId('password')
        this.LoginButton=page.getByTestId('login-submit')
        this.registerAccountLink=page.getByTestId('register-link')
    }

}