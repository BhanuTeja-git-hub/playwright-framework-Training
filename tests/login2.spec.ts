import { test, expect } from '../fixtures/base.js';
import { invalidLoginData } from '../utils/data-source.js'
import { ExcelUtils } from '../utils/excel-utils.js';
import { JsonUtils } from "../utils/json-utils.js"
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';

const invalidLoginJsonData = JsonUtils.getJson("invalidLoginData")
const validLoginJsonData = JsonUtils.getJson("validLoginData")

test.describe('OrangeHRM login functional Tests',()=>{
  
  for (const {username,password,expected_error} of invalidLoginData) {
    //test invalid credentials and error message
    test(`verify invalid login for: ${username} and ${password}`, async({page}) =>{

      const loginpage = new LoginPage(page)
      await loginpage.fillUsername(username)
      await loginpage.fillPassword(password)
      await loginpage.clickLogin()
      await loginpage.verifyInvalidLoginErrorMessage(expected_error)

    });
  }
  
    //test Valid credentials and login
  for (const {username,password,expected_value} of validLoginJsonData) {
    test(`verify valid login from json ${username} and ${expected_value}`, async({page}) =>{
      const loginpage = new LoginPage(page)
      await loginpage.fillUsername(username)
      await loginpage.fillPassword(password)
      await loginpage.clickLogin()
      const dashboardpage = new DashboardPage(page)
      await dashboardpage.verifyDashboardHeader('Dashboard')
    });
  }


});
