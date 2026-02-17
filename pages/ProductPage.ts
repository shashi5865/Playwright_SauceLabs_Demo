import { Page } from '@playwright/test'
import { ProductPageLocators } from '../locators/ProductPageLocators'

export class ProductPage
{
    constructor(private page: Page)
    {}
    async logoutPage()
    {
        await this.page.click(ProductPageLocators.menubutton)
        await this.page.click(ProductPageLocators.logoutlink)
    }
    async aboutPage()
    {
        
        await this.page.click(ProductPageLocators.menubutton)
        await this.page.click(ProductPageLocators.aboutlink)

    }
}
