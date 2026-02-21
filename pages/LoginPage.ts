import { LoginLocators } from "../locators/LoginLocators";
import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}
  async login(username: string, password: string) {
    (await this.page.fill(LoginLocators.userNameInput, username),
      await this.page.fill(LoginLocators.passWordInput, password),
      await this.page.click(LoginLocators.loginButton));
  }
  private errorMessage = ".error-message-container";

  async getErrorMessage() {
    return this.page.locator(this.errorMessage);
  }
}
