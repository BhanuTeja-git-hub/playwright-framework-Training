import { test, expect } from '@playwright/test';

test.describe('OrangeHRM login UI Tests',()=>{

    test.beforeEach( async({page}) =>{

      await page.goto('/');
    });


    //to verify page title
    test('verify title', async ({page}) =>{

      //await page.goto('/')
      await expect(page).toHaveTitle('OrangeHRM')
      expect(await page.title()).toBe('OrangeHRM')

    });

    //test for header,placeholder
    test('verify header', async ({page})=>{

      //await page.goto('/');
      await expect(page.locator("xpath=//h5[text()='Login']")).toHaveText('Login')

    }) ;

    //verify placeholder for username and password
    test('verify username and pswd placeholders', async ({page})=>{

      //await page.goto('/');
      await expect(page.locator("xpath=//input[@name='username']")).toHaveAttribute('placeholder','Username')
      await expect(page.locator("xpath=//input[@name='password']")).toHaveAttribute('placeholder','Password')

    });



})