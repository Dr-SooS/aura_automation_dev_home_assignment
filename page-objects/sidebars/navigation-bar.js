exports.NavigationBar = class NavigationBar {
    /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async navigate(folderName, pageName) {
    await this.page.locator('section:nth-child(2) > section > section > .sc-kFuwaP > svg').click();
    await this.page.locator('a', {hasText: folderName}).click();
    await this.page.getByRole('link', {name: pageName}).click();
  }
}