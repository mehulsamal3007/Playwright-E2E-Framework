import { Before, After, Status, AfterStep, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import TestWorld from "./world";

setDefaultTimeout(12000);

Before("@ui", async function (this: TestWorld) {
  this.browser = await chromium.launch({
    channel: "chrome",
    headless: (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.HEADLESS === "true",
  });
  this.page = await this.browser.newPage();
});

AfterStep("@ui", async function (this: TestWorld) {
  if (this.page) {
    await this.attach(await this.page.screenshot(), "image/png");
  }
});

After(async function (this: TestWorld, scenario) {
  try {
    if (scenario.result?.status === Status.FAILED && this.page) {
      await this.attach(await this.page.screenshot(), "image/png");
    }
  } finally {
    await this.browser?.close();
  }
});
