import { World } from "@cucumber/cucumber";
import { Browser, Page } from "@playwright/test";
import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import CartPage from "../pages/cart.page";
import CheckoutPage from "../pages/checkout.page";
import type { LoginVerificationResponse } from "../utils/apiClient";
import ProductPage from "../pages/pdp.page";

export default class TestWorld extends World {
  browser?: Browser;
  page!: Page;
  homePage!: HomePage;
  loginPage!: LoginPage;
  apiLoginResult?: LoginVerificationResponse;
  pdpPage!: ProductPage;
  cartPage!: CartPage;
  checkoutPage!: CheckoutPage;
}
