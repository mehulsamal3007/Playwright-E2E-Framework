import { Then, When } from "@cucumber/cucumber";
import CartPage from "../pages/cart.page";
import TestWorld from "../supports/world";

Then('User should see the product {string} with quantity {int} in the cart', async function (this: TestWorld, productName: string, qty: number) {
  this.cartPage = new CartPage(this.page);
  await this.cartPage.verifyProductOnCart(productName,qty);
});

Then('User clicks on Proceed To Checkout button', async function(this:TestWorld){
  await this.cartPage.clickProceedToCheckoutButton();
});