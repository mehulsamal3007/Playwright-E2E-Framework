import { Page } from "@playwright/test";
import { reusability } from "../utils/Reusability";

const locators = new reusability("checkout.json");

export default class CheckoutComponents {
  constructor(private readonly page: Page) {}

  async verifyCheckoutPage(): Promise<void> {
    const locator = locators.getLocator("checkoutPage", "headerAddressDetails");
    await this.page.locator(locator).isVisible();
  }

  async clickPlaceOrderButton(): Promise<void> {
    const placeOrderButtonLocator = locators.getLocator("checkoutPage", "placeOrderButton");
    await this.page.locator(placeOrderButtonLocator).click();
  }
}