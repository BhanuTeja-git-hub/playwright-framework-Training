import { test, expect } from '../fixtures/base.js';
import { invalidLoginData } from '../utils/data-source.js'
import { ExcelUtils } from '../utils/excel-utils.js';
import { JsonUtils } from "../utils/json-utils.js"

const invalidLoginJsonData = JsonUtils.getJson("invalidLoginData")
const validLoginJsonData = JsonUtils.getJson("validLoginData")

test.describe('OrangeHRM login functional Tests',()=>{
  
  for (const {username,password,expected_error} of invalidLoginData) {
    //test invalid credentials and error message
    test(`verify invalid login for: ${username} and ${password}`, async({page}) =>{

      await page.locator("//input[@name='username']").fill(username)
      await page.locator("//input[@name='password']").fill(password)
      await page.locator("//button[text()=' Login ']").click()
      await expect(page.locator("//p[text()='Invalid credentials']")).toHaveText(expected_error)

    });
  }
  
  for (const {username,password,expected_error} of invalidLoginJsonData) {
    //test invalid credentials and error message
    test(`verify invalid login from json ${username} and ${password}`, async({page}) =>{

      await page.locator("//input[@name='username']").fill(username)
      await page.locator("//input[@name='password']").fill(password)
      await page.locator("//button[text()=' Login ']").click()
      await expect(page.locator("//p[text()='Invalid credentials']")).toHaveText(expected_error)

    });
  }
    //test Valid credentials and login
    for (const {username,password,expected_value} of validLoginJsonData) {
    test(`verify valid login from json ${username} and ${expected_value}`, async({page}) =>{

      await page.locator("//input[@name='username']").fill(username)
      await page.locator("//input[@name='password']").fill(password)
      await page.locator("//button[text()=' Login ']").click()
      await expect(page.locator("//h6[text()='Dashboard']")).toHaveText('Dashboard')

    });
  }

  for (const {username,password,expected_error} of ExcelUtils.readExcelData("invalidLoginData")) {
    //test invalid credentials and error message
    test(`verify invalid login from excel ${username} and ${password}`, async({page}) =>{

      await page.locator("//input[@name='username']").fill(username)
      await page.locator("//input[@name='password']").fill(password)
      await page.locator("//button[text()=' Login ']").click()
      await expect(page.locator("//p[text()='Invalid credentials']")).toHaveText(expected_error)

    });
  }

});
