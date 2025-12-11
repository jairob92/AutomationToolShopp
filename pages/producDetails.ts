import { Locator, Page } from "@playwright/test";

export class ProducDetails {
  private readonly addToCartButton: Locator;
  private readonly increaseQuantityButton: Locator;
  private readonly decreaseQuantityButton: Locator;

  constructor(page: Page) {
    this.addToCartButton = page.getByTestId("add-to-cart");
    this.increaseQuantityButton = page.getByTestId("increase-quantity");
    this.decreaseQuantityButton = page.getByTestId("decrease-quantity");
  }

  async clickOnAddToCart() {
    await this.addToCartButton.click();
  }

  async clickOnIncreaseQuantity() {
    await this.increaseQuantityButton.click();
  }
  async clickOnDecreaseQuantity() {
    await this.decreaseQuantityButton.click();
  }
}
