import { Then, When } from "@cucumber/cucumber";
import CheckoutPage from "../pages/checkout.page";
import TestWorld from "../supports/world";

Then('User should see the address details and review order', async function (this: TestWorld) {
  this.checkoutPage = new CheckoutPage(this.page);
  await this.checkoutPage.verifyCheckoutPage();
});

Then('User clicks on Place Order button', async function(this:TestWorld){
  await this.checkoutPage.clickPlaceOrderButton();
});