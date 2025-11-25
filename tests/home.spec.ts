import { expect } from "@playwright/test";
import { test } from "../fixtures/baseFixture";
import { HomePage } from "../pages/homePage"; // <-- added import

test("Check page title", async ({ page }) => {
  await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");
});

test("Check at least on product is listed", async ({ page }) => {
  const homePage = new HomePage(page);
  const productCard = page.locator(".card");
  await expect(productCard.first()).toBeVisible();
});

test("Should list Pliers when searching by product name", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.typeProduct("pliers");
  await Promise.all([
    page.waitForResponse(
      (response) =>
        response.url().includes("/products/search") && response.status() === 200
    ),
    await homePage.clickOnSearchButton(),
  ]);
  const productsListed = await page.getByTestId("product-name").allInnerTexts();
  expect(productsListed).toContain("Pliers");
  expect(productsListed.length).toBeGreaterThan(0);
});

test("should filter producs by name", async ({ page }) => {
  page.on("request", (r) => console.log(r.url(), r.method()));
  page.on("response", (r) => console.log(r.url(), r.status()));
  const homePage = new HomePage(page);
  await Promise.all([
    page.waitForResponse(
      (response) =>
        response.url().includes("/products?page") &&
        response.url().includes("by_category") &&
        response.status() === 200
    ),
    await homePage.filterByHammerTool(),
  ]);

  const productCard = await page.locator(".card").all();

  const tools: Tool[] = [];

  for (let product of productCard) {
    let tool: Tool = {
      description: await product.locator(".card-title").innerText(),
      price: await product.getByTestId("product-price").innerText(),
    };
    tools.push(tool);
  }

  const totalPrice = tools
    .map((t) => parseFloat(t.price.replace(/[^0-9.]/g, "")))
    .reduce((sum, n) => sum + n, 0);

  console.log(totalPrice);
  console.log(tools);
  expect(
    tools.some((tool) =>
      tool.description.toLocaleLowerCase().includes("hammer")
    )
  ).toBeTruthy();
  expect(totalPrice > 100);
});

interface Tool {
  description: string;
  price: string;
}
