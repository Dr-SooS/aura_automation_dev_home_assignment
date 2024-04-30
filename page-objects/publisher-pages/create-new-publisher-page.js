const { BasePage } = require('../base-page');

exports.CreateNewPublisherPage = class CreateNewPublisherPage extends BasePage {
     /**
   * @param {import('../base-page').BasePage} page
   */
  constructor(page) {
    super(page);
    this.nameField = page.locator('[name="name"]');
    this.emailField = page.locator('[name="email"]');
    this.saveButton = page.locator('[type="submit"]');
  }

  async feelForm(name, email) {
    await this.nameField.type(name);
    await this.emailField.type(email);
    await this.saveButton.click();
  }
}