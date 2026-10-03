import {Page} from "@playwright/test";
import LoginComponents from "../components/login.component";

export default class LoginPage {
  private loginComponents: LoginComponents;

  constructor(private page: Page) {
    this.loginComponents = new LoginComponents(this.page);
  }

  async goto() {
    await this.page.goto("https://automationexercise.com");
  }

  async navigateToLoginPage() {
    await this.loginComponents.clickLoginLink();
  }
  
  async enterCredentials(email: string, password: string) {
    await this.loginComponents.enterEmail(email);
    await this.loginComponents.enterPassword(password);
  }

  async clickOnLogin() {
    await this.loginComponents.clickLoginButton();
  }

  async verifyLogin() {
    await this.loginComponents.verifyLogin();
  }

  async verifyLoginError(expectedErrorMessage: string) {
    await this.loginComponents.verifyLoginError(expectedErrorMessage);
  }

  async clickCartButton() {
    await this.loginComponents.clickCartButton();
  }
}