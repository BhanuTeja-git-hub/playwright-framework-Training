import { test, expect } from '../fixtures/base.js';

test.describe('OrangeHRM login functional Tests',()=>{

    //test invalid credentials and error message
    test('test invalid creds' , async({page}) =>{

      await page.locator("//input[@name='username']").fill('Admin1234')
      await page.locator("//input[@name='password']").fill('Passwrd1234')
      await page.locator("//button[text()=' Login ']").click()
      await expect(page.locator("//p[text()='Invalid credentials']")).toHaveText('Invalid credentials')

    });

    //test Valid credentials and login
    test('test Valid creds' , async({page}) =>{

      await page.locator("//input[@name='username']").fill('Admin')
      await page.locator("//input[@name='password']").fill('admin123')
      await page.locator("//button[text()=' Login ']").click()
      await expect(page.locator("//h6[text()='Dashboard']")).toHaveText('Dashboard')

    });

});
