import { Locator, Page } from "@playwright/test";

export class NavBar {
  private readonly home: Locator;
  private readonly categories: Locator;
  private readonly contact: Locator;
  private readonly singIn: Locator;

  constructor(page: Page) {
    this.home = page.getByRole("link", { name: "Home" });
    this.categories = page.getByRole("link", { name: "Categories" });
    this.contact = page.getByRole("link", { name: "Contact" });
    this.singIn = page.getByRole("link", { name: "Sign in" });
  }
  async clickOnHome() {
    await this.home.click();
  }

  async clickOnCategories() {
    await this.categories.click();
  }

  async clickOnContact() {
    await this.contact.click();
  }

  async clickOnSignIn() {
    await this.singIn.click();
  }
}
