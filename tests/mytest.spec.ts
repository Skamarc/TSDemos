import {test,expect} from "@playwright/test";
import { url } from "node:inspector";

//Syntax:


test("Verify page title",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com")
   
    let title:string = await page.title()
        console.log("title:",title);

    await expect(page).toHaveTitle("Automation Testing Practice")

})

test("Check URL",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com")
   
    let url:string = await page.url()
        console.log("Url:",url);

    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")

})