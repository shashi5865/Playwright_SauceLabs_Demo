import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { BASE_URL } from "../utils/env.Config";
import { validUser, invalidUsers } from "../test-data/loginData";
test.describe("Login Tests", () => {
  test("Valid Login @smoke", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto(BASE_URL);
    await loginPage.login(validUser.username, validUser.password);

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  invalidUsers.forEach((user, index) => {
    test(`Invalid Login - ${user.username || "Empty Fields"} @regression ${index > 0 ? `(${index + 1})` : ""}`, async ({
      page,
    }) => {
      const loginPage = new LoginPage(page);

      await page.goto(BASE_URL);
      await loginPage.login(user.username, user.password);

      await expect(await loginPage.getErrorMessage()).toHaveText(user.error);
    });
  });
});
