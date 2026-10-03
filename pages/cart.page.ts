import {Page} from "@playwright/test";
import CartComponents from "../components/cart.component";

export default class CartPage {
  private readonly cartComponents: CartComponents;

  constructor(page: Page) {
    this.cartComponents = new CartComponents(page);
  }

  async verifyProductOnCart(productName: string,qty:number): Promise<void> {
    await this.cartComponents.verifyProductOnCart(productName,qty);
  }

  async clickProceedToCheckoutButton(): Promise<void> {
    await this.cartComponents.clickProceedToCheckoutButton();
  }
} 