import {Page} from "@playwright/test";
import CheckoutComponents from "../components/checkout.component";

export default class CheckoutPage {
  private readonly checkoutComponents: CheckoutComponents;

  constructor(page: Page) {
    this.checkoutComponents = new CheckoutComponents(page);
  }

  async verifyCheckoutPage(): Promise<void> {
    await this.checkoutComponents.verifyCheckoutPage();
  }

  async clickPlaceOrderButton(): Promise<void> {
    await this.checkoutComponents.clickPlaceOrderButton();
  }
} 