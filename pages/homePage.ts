import { Locator, Page } from "@playwright/test";

export class HomePage{

    private readonly searchInput:Locator
    private readonly searchButton:Locator
    private readonly sortSelect:Locator
    private readonly handToolsCheckbox:Locator
    private readonly hammerToolCheckbox:Locator

    constructor(page:Page){
        this.searchInput = page.getByTestId('search-query')
        this.searchButton= page.getByTestId('search-submit')
        this.sortSelect = page.getByTestId('sort')
        this.handToolsCheckbox= page.getByLabel(' Hand Tools')
        this.hammerToolCheckbox= page.getByLabel(' Hammer')
    }

    async typeProduct(toolName:string){
        await this.searchInput.fill(toolName)
    }
    async clickOnSearchButton(){
        await this.searchButton.click()
    }
    async selectSort(value:string){
        await this.sortSelect.selectOption(value)
    }
    async filterByHammerTool(){
        await this.hammerToolCheckbox.check()
    }
    async filterByHandTools(){
        await this.handToolsCheckbox.check()
    }
}