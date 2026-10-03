import { Page } from "@playwright/test";
import { reusability } from "../utils/Reusability";

const locators = new reusability("product.json");

export default class HomeComponents {
  constructor(private readonly page: Page) {}

  async clickProductViewButton(productName: string): Promise<void> {
    const locator = locators.getLocator("Products", "viewProductButton", productName);
    await this.page.locator(locator).click();
  }
}