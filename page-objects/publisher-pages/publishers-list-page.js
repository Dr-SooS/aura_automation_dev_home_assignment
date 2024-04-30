const { BasePage } = require('../base-page');
const { CreateNewPublisherPage } = require('./create-new-publisher-page');

exports.PublishersListPage = class PublishersListPage extends BasePage {
     /**
   * @param {import('../base-page').BasePage} page
   */
  constructor(page) {
    super(page);
    this.createPublisherButton = page.page.locator('a', {hasText: 'Create new'});
  }

  async createPublisher() {
    await this.createPublisherButton.click();
    return new CreateNewPublisherPage(this.page.page);
  }
}