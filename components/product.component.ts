import { Page,expect } from "@playwright/test";
import { reusability } from "../utils/Reusability";

const locators = new reusability("product.json");

export default class ProductComponents {
  constructor(private readonly page: Page) {}

  async verifyProductViewPage(productName: string): Promise<void> {
    const locator = locators.getLocator("Products", "productName", productName);
    const verifyProductName = await this.page.locator(locator).textContent();
    expect(verifyProductName).toBe(productName);
  }

  async enterQuantity(quantity: string): Promise<void> {
    const locator = locators.getLocator("Products", "quantityInput");
    await this.page.locator(locator).fill(quantity);
  }

  async clickAddToCartButton(): Promise<void> {
    const locator = locators.getLocator("Products", "addToCartButton");
    await this.page.locator(locator).click();
  }

  async verifyAddedToCartConfirmation(expectedMessage: string): Promise<void> {
    const locator = locators.getLocator("Products", "addedToCartConfirmation");
    await this.page.waitForSelector(locator, { state: "visible" });
    const actualMessage = await this.page.locator(locator).textContent();
    expect(actualMessage?.trim()).toBe(expectedMessage);
  }

  async clickContinueShoppingButton(): Promise<void> {
    const locator = locators.getLocator("Products", "continueShoppingButton");
    await this.page.locator(locator).click();
  }
}