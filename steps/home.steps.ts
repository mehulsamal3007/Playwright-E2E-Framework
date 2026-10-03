import { When } from "@cucumber/cucumber";
import HomePage from "../pages/home.page";
import TestWorld from "../supports/world";

When('User click on {string} Product View button', async function (this: TestWorld, productName: string) {
  this.homePage = new HomePage(this.page);
  await this.homePage.clickProductViewButton(productName);
});