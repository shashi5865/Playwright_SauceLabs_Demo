import { test, expect } from "@playwright/test";
import { BASE_URL } from "../utils/env.Config";
import { validUser } from "../test-data/loginData";
import { ProductPage } from "../pages/ProductPage";
import { LoginPage } from "../pages/LoginPage";

test.describe("Product Page Validation @regression", () => {
  let loginPage: LoginPage;
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);

    await page.goto(BASE_URL);
    await loginPage.login(validUser.username, validUser.password);
    await expect(page).toHaveURL(/inventory/);
  });

  test("Validate Logout Functionality @smoke", async ({ page }) => {
    await productPage.logoutPage();
    await expect(page).toHaveURL(BASE_URL);
  });

  test("Validate About Link and Navigate Back @regression", async ({
    page,
  }) => {
    await productPage.aboutPage();

    await expect(page).toHaveURL(/saucelabs/);

    await page.goBack();

    await expect(page).toHaveURL(/inventory/);
  });

  test("Validate Products Page @smoke", async () => {
    await productPage.validateAllProductsDisplayed();
    await productPage.addFirstProductToCart();
  });

  test("Validate Add All Products To Cart @regression", async () => {
    await productPage.addAllProductsToCart();
  });
});

