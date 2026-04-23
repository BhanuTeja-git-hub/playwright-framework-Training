import { test, expect } from '../fixtures/base.js';

test.describe('Employee management tests',()=>{

test('test Valid creds' , async({page}) =>{

      await page.locator("//input[@name='username']").fill('Admin')
      await page.locator("//input[@name='password']").fill('admin123')
      await page.locator("//button[text()=' Login ']").click()

    });

});