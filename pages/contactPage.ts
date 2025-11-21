import { expect, Locator, Page } from "@playwright/test";

export class contactPage{

    private readonly firstNameInput:Locator
    private readonly lastNameInput:Locator
    private readonly emailInput:Locator
    private readonly subjectSelect:Locator
    private readonly messageTextarea:Locator
    private readonly fileAttachment:Locator
    private readonly sendButton:Locator

    constructor(page:Page){
        this.firstNameInput=page.getByTestId('first-name')
        this.lastNameInput=page.getByTestId('last-name')
        this.emailInput=page.getByTestId('email')
        this.subjectSelect=page.getByTestId('subject')
        this.messageTextarea=page.getByTestId('message')
        this.fileAttachment=page.getByTestId('attachment')
        this.sendButton=page.getByTestId('contact-submit')
    }

    async typeFirstName(first_name:string){
        await this.firstNameInput.fill(first_name)
    }
    async typeLastName(last_name:string){
       await this.lastNameInput.fill(last_name)
    }
    async typeEmail(email:string){
        await this.emailInput.fill(email)
    }
    async selectSubjectValue(value:string){
        await this.subjectSelect.selectOption(value)
    }

    async typeMessage(message:string){
        await this.messageTextarea.fill(message)
    }

    async attachFile(path:string, file_name:string){
        await this.fileAttachment.setInputFiles(path)
        const uploadedFile = await this.fileAttachment.inputValue()
        expect(uploadedFile).toContain(file_name)
    }

    async clickOnSendButton(){
        this.sendButton.click()
    }
}