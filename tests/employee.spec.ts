import { test, expect } from '../fixtures/base.js';

test.describe("Employee management tests", () => {
  test('verify adding new employee', async ({ page }) => {
    await page.locator("xpath=//input[@name='username']").fill('Admin')
    await page.locator("xpath=//input[@name='password']").fill('admin123')
    await page.locator("xpath=//button[contains(normalize-space(),'Login')]").click()
   
    //click on PiM menu
    await page.locator("//span[text()='PIM']").click()

    //click on Add Employee
    await page.locator("//a[text()='Add Employee']").click()

    //enter firstname as john
    await page.locator("//input[@name='firstName']").click()

    //enter middle name as w
    await page.locator("//input[@name='middleName']").click()

    //enter lastname as wick
    await page.locator("//input[@name='lastName']").click()

    //click on save
    await page.locator("//button[contains(normalize-space(),'Save')]").click()

    //validate profile name - john wick
    await page.locator("").click()

    //validate firstname in the textbox 
    //await expect.soft(page.locator("xpath=//input[@name='username']")).toHaveAttribute('value', 'john')
   
  });
})