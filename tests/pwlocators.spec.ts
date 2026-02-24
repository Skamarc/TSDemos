/* page.getByRole() Locate elements by accessibility roles like button, checkbox,
heading, etc.
page.getByText() Locate by visible text content.
page.getByLabel() Locate form controls using associated label text.
page.getByPlaceholder() Locate inputs via placeholder text.
page.getByAltText() Locate images by their alternative text (alt attribute).
page.getByTitle() Locate elements by their title attribute.
page.getByTestId() Locate by a custom data attribute like data-testid */

import { test, expect } from "@playwright/test";

test("Verify Playwright locators", async ({ page }) => {


  await page.goto("https://testautomationpractice.blogspot.com/")
  await expect(page.getByText("GUI Elements")).toBeVisible()

  await expect(page.getByPlaceholder("Enter Name")).toBeVisible();
  await page.getByPlaceholder("Enter Name").fill("John");

// Sprawdzić czy "Dog" jest w dropdown
await expect(page.locator("#animals")).toContainText("Dog");

// Sprawdzić czy "Pies" NIE ma
await expect(page.locator("#animals")).not.toContainText("Pies");

// Sprawdzić wartości w tabeli
  await expect(page.locator("table[name='BookTable']")).toContainText("Learn Selenium");
  await expect(page.locator("table[name='BookTable']")).toContainText("Amit");
  await expect(page.locator("table[name='BookTable']")).toContainText("Selenium");
  await expect(page.locator("table[name='BookTable']")).toContainText("Mukesh");
  
  // Sprawdzić konkretny wiersz
  await expect(page.locator("table[name='BookTable']")).toContainText("Learn Java");
  await expect(page.locator("table[name='BookTable']")).toContainText("Java");
  
/*   await page.goto("https://demo.nopcommerce.com");

  await expect(
    page.getByAltText("nopCommerce demo store")
  ).toBeVisible();

  await page.getByRole("link", { name: "Register" }).click();
  await expect(page).toHaveURL(/register/); */

  // ✅ REGEX = STABILNOŚĆ
/*   await expect(page.getByLabel(/first name/i)).toBeVisible();
  await page.getByLabel(/first name/i).fill("John");
  await page.getByLabel(/last name/i).fill("Smith");
  await page.getByLabel(/email/i).fill(`john${Date.now()}@test.com`); */



/*   await expect(page.getByPlaceholder("Search store")).toBeVisible();
  await page.getByPlaceholder("Search store").fill("Apple MacBook Pro");

  await expect(page.getByAltText("Picture for category Electronics")).toBeVisible();
 */
  // getByTitle() Locate elements by their title attribute.

});

/* test("Automation Testing Practice",async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com")

    await expect(page.getByText("Automation Testing Practice")).toBeVisible()
    await page.getByRole("button",{name:"START"}).click()
})

/* test("Udemy", async ({ page }) => {
  await page.goto("https://www.udemy.com");

  await expect(
    page.getByRole("img", { name: /udemy/i })
  ).toBeVisible();
}); */

//5 get by placeholder


