import {Page} from "@playwright/test";
import ProductComponents from "../components/product.component";

export default class ProductPage {
  private readonly productComponents: ProductComponents;

  constructor(page: Page) {
    this.productComponents = new ProductComponents(page);
  }

  async verifyProductViewPage(productName: string): Promise<void> {
    await this.productComponents.verifyProductViewPage(productName);
  }

  async enterQuantity(quantity: string): Promise<void> {
    await this.productComponents.enterQuantity(quantity);
  }

  async clickAddToCartButton(): Promise<void> {
    await this.productComponents.clickAddToCartButton();
  }

  async verifyAddedToCartConfirmation(expectedMessage: string): Promise<void> {
    await this.productComponents.verifyAddedToCartConfirmation(expectedMessage);
  }

  async clickContinueShoppingButton(): Promise<void> {
    await this.productComponents.clickContinueShoppingButton();
  }
}