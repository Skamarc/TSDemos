import {test,expect, Locator} from '@playwright/test';

test("Xpath demo in playwright", async ({page})=>{

//await page.goto('https://testpages.eviltester.com/');
await page.goto('https://demowebshop.tricentis.com/');


//1.Absolute xpath

const logo: Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]")

expect(logo).toBeVisible();

//2.Relative xpath

const relativeLogo: Locator = page.locator("//input[@id='small-searchterms']")
await expect(relativeLogo).toBeVisible();


//3. Xpath with contains

    const products: Locator = page.locator("//h2/a[contains(@href,'computer')]")

        
    const productsCount:number =  await products.count();
    console.log("NO of Computer products: ", productsCount);
    expect(productsCount).toBeGreaterThan(0);

//await expect(products).toBeVisible();



}
);
