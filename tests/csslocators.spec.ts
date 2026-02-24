import{test,expect} from '@playwright/test';

  test('should locate elements using CSS selectors', async ({ page }) => {


    //tag#id


/*     expect(page.locator("#small-searchterms")).toBeVisible();
    await page.locator("#small-searchterms").fill("Phone");
    await page.locator('input.button-1.search-box-button').click(); */



    //tag.class
    //await page.locator('.search-box-text').fill("Phone");

    //page.locator('.search-box-text[value="Search store"]').fill("Phone");

    await page.goto('https://testpages.eviltester.com/');
    page.getByRole('heading', { name: 'Software Testing Practice Pages' })
    await expect(page.locator('h1:has-text("Software Testing Practice Pages")')).toBeVisible();

    await page.waitForTimeout(2000);


  }





    );

