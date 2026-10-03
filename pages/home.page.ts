import {Page} from "@playwright/test";
import HomeComponents from "../components/home.component";

export default class HomePage {
  private readonly homeComponents: HomeComponents;

  constructor(page: Page) {
    this.homeComponents = new HomeComponents(page);
  }

  async clickProductViewButton(productName: string): Promise<void> {
    await this.homeComponents.clickProductViewButton(productName);
  }
}