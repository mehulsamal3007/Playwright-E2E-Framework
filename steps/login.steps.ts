import {Given, When, Then} from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import LoginPage from "../pages/login.page";
import TestWorld from "../supports/world";
import { ApiClient } from "../utils/apiClient";

const apiClient = new ApiClient();

Given('User launch the application', async function (this: TestWorld) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
});

When('User navigates to login page', async function (this: TestWorld) {
  await this.loginPage.navigateToLoginPage();
});

When('User enters {string} and {string}', async function (this: TestWorld, email: string, password: string) {
  await this.loginPage.enterCredentials(email, password);
});

When('User enters {string} and {string} via API', async function (this: TestWorld, email: string, password: string) {
  this.apiLoginResult = await apiClient.login(email, password);
});

Then('API should confirm the user exists', function (this: TestWorld) {
  expect(this.apiLoginResult).toEqual({ responseCode: 200, message: "User exists!" });
});

When('User refresh the page', async function (this: TestWorld) {
  await this.page.reload();
});

When('User clicks on the login button', async function (this: TestWorld) {
  await this.loginPage.clickOnLogin();
});

Then('User should be logged in successfully', async function (this: TestWorld) {
  await this.loginPage.verifyLogin();
});

Then('User should get an error message {string}', async function (this: TestWorld, errorMessage: string) {
  await this.loginPage.verifyLoginError(errorMessage);
});