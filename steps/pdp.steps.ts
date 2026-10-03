import { When,Then } from "@cucumber/cucumber";
import ProductPage from "../pages/pdp.page";
import LoginPage from "../pages/login.page";
import TestWorld from "../supports/world";

When('User should navigate to Product View page {string}', async function (this: TestWorld, productName: string) {
  this.pdpPage = new ProductPage(this.page);
  this.loginPage = new LoginPage(this.page);
  await this.pdpPage.verifyProductViewPage(productName);
});

Then('User enters the quantity {string}', async function (this: TestWorld, quantity: string) {
  await this.pdpPage.enterQuantity(quantity);
});

When('User click on Add to Cart button', async function (this: TestWorld) {
  await this.pdpPage.clickAddToCartButton();
});

Then('User should see the {string} confirmation message', async function (this: TestWorld, confirmationMessage: string) {
   await this.pdpPage.verifyAddedToCartConfirmation(confirmationMessage);
});

When('User clicks on Continue Shopping button', async function (this: TestWorld) {
  await this.pdpPage.clickContinueShoppingButton();
});

When('User click on Cart button in PDP', async function (this: TestWorld) {
  await this.loginPage.clickCartButton();
});