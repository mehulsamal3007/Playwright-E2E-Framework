import {Page} from "@playwright/test";
import { reusability } from "../utils/Reusability";
import { expect } from "@playwright/test";

const locators = new reusability('login.json');

export default class LoginComponents {
  constructor(private page: Page) {}

  async clickLoginLink() {
    const locator = locators.getLocator('Header', 'login');
    await this.page.click(locator);
  }

  async enterEmail(email: string) {
    const locator = locators.getLocator('Login', 'emailField');
    await this.page.fill(locator, email);
  }

  async enterPassword(password: string) {
    const locator = locators.getLocator('Login', 'passwordField');
    await this.page.fill(locator, password);
  }

  async clickLoginButton() {
    const locator = locators.getLocator('Login', 'loginButton');
    await this.page.click(locator);
  }

  async verifyLogin() {
    const locator = locators.getLocator('Login', 'loggedInText');
    await expect(this.page.locator(locator)).toBeVisible();
  }

  async verifyLoginError(expectedErrorMessage: string) {
    const locator = locators.getLocator('Login', 'loginError');
    const actualErrorMessage = await this.page.locator(locator).textContent();
    expect(actualErrorMessage?.trim()).toBe(expectedErrorMessage);
  }

  async clickCartButton() {
    const locator = locators.getLocator('Header', 'cart');
    await this.page.click(locator);
    // await this.page.waitForLoadState('networkidle');
    expect(this.page.url()).toContain('/view_cart');
  }
}