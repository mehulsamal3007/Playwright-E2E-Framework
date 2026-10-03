import { Page,expect } from "@playwright/test";
import { reusability } from "../utils/Reusability";

const locators = new reusability("cart.json");

export default class CartComponents {
  constructor(private readonly page: Page) {}

  async verifyProductOnCart(productName: string, qty: number): Promise<void> {
    const productNameLocator = locators.getLocator("Cart", "productName", productName);
    const productQuantityLocator = locators.getLocator("Cart", "productQuantity", qty.toString());

    await this.page.locator(productNameLocator).isVisible();
    await this.page.locator(productQuantityLocator).isVisible();

    expect(await this.page.locator(productNameLocator).textContent()).toBe(productName);
    expect(await this.page.locator(productQuantityLocator).textContent()).toBe(qty.toString());
  }

  async clickProceedToCheckoutButton(): Promise<void> {
    const proceedToCheckoutButtonLocator = locators.getLocator("Cart", "proceedToCheckoutButton");
    await this.page.locator(proceedToCheckoutButtonLocator).click();
  }
}