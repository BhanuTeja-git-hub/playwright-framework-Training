import {expect, type Page} from '../fixtures/base.js';

const DASHBOARD_HEADER_LOCATOR = "//h6[text()='Dashboard']"

class DashboardPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    //create a method to verify dashboard header
    async verifyDashboardHeader(expected_header:string):Promise<void> {
        await expect(this.page.locator(DASHBOARD_HEADER_LOCATOR)).toHaveText(expected_header)
    }
}

export {DashboardPage}