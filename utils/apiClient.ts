import { request } from "@playwright/test";

export interface LoginVerificationResponse {
  responseCode: number;
  message: string;
}

export class ApiClient {
  constructor(private readonly baseUrl = "https://automationexercise.com/api") {}

  async postForm(endpoint: string, form: Record<string, string>): Promise<unknown> {
    const requestContext = await request.newContext();

    try {
      const response = await requestContext.post(`${this.baseUrl}/${endpoint}`, { form });
      const responseText = await response.text();

      if (!response.ok()) {
        throw new Error(`API request failed: HTTP ${response.status()} ${responseText}`);
      }

      try {
        return JSON.parse(responseText) as unknown;
      } catch {
        throw new Error(`API returned invalid JSON: ${responseText}`);
      }
    } finally {
      await requestContext.dispose();
    }
  }

  async login(email: string, password: string): Promise<LoginVerificationResponse> {
    const result = await this.postForm("verifyLogin", { email, password });

    if (
      typeof result !== "object" ||
      result === null ||
      !("responseCode" in result) ||
      !("message" in result) ||
      typeof result.responseCode !== "number" ||
      typeof result.message !== "string"
    ) {
      throw new Error(`Login verification returned an unexpected response: ${JSON.stringify(result)}`);
    }

    if (result.responseCode !== 200 || result.message !== "User exists!") {
      throw new Error(`Login verification failed: ${result.message} (response code ${result.responseCode})`);
    }

    return {
      responseCode: result.responseCode,
      message: result.message,
    };
  }
}
