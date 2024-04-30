// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page-objects/login-page');
const { log } = require('console');
const { BasePage } = require('../page-objects/base-page');
const { PublishersListPage } = require('../page-objects/publisher-pages/publishers-list-page');
const { generateRandomString } = require('../utils/string-utils');

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login();
});

test('create publisher', async ({ page }) => {
    const basePage = new BasePage(page);
    await basePage.navigationBar.navigate('Happy Folder', 'Publisher');
    const publishersPage = new PublishersListPage(basePage);
    var newPublisherPage = await publishersPage.createPublisher();
    var emailString = generateRandomString(10);
    await newPublisherPage.feelForm("Test_Auto", emailString);
    await expect(page.locator('td', {hasText: emailString})).toBeVisible();
});
