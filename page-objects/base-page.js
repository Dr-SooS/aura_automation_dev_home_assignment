const { NavigationBar } = require('./sidebars/navigation-bar');

exports.BasePage = class BaseBage {
    /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.navigationBar = new NavigationBar(page);
  }
}