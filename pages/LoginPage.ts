import {expect, type Page} from '../fixtures/base.js';

const USERNAME_LOCATOR = "//input[@name='username']"
const PASSWORD_LOCATOR = "//input[@name='password']"
const LOGIN_BUTTON_LOCATOR = "//button[text()=' Login ']"
const INVALID_CREDENTIALS_ERROR_LOCATOR = "//p[text()='Invalid credentials']"


class LoginPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    //create a method to fill username
    async fillUsername(username:string):Promise<void> {
        await this.page.locator(USERNAME_LOCATOR).fill(username)
    }
    //create a method to fill password
    async fillPassword(password:string):Promise<void> {
        await this.page.locator(PASSWORD_LOCATOR).fill(password)
    }
    //create a method to click on login button
    async clickLogin():Promise<void> {
        await this.page.locator(LOGIN_BUTTON_LOCATOR).click()
    }
    //create a method to verify error message for invalid login
    async verifyInvalidLoginErrorMessage(expected_error:string):Promise<void> {
        await expect(this.page.locator(INVALID_CREDENTIALS_ERROR_LOCATOR)).toHaveText(expected_error)
    }
    //create a method to verify placeholder for username
    async verifyusernamePlaceholder(expected_placeholder:string):Promise<void> {
        await expect(this.page.locator(USERNAME_LOCATOR)).toHaveAttribute('placeholder', expected_placeholder)
    }
    //create a method to verify placeholder for password
    async verifypasswordPlaceholder(expected_placeholder:string):Promise<void> {
        await expect(this.page.locator(PASSWORD_LOCATOR)).toHaveAttribute('placeholder', expected_placeholder)
    }
}

export {LoginPage}