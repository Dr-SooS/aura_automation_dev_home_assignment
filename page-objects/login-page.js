exports.LoginPage = class LoginPage {
    /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.emailField = page.locator('input', {name: 'email'});
    this.passwordField = page.locator('input', {name: 'password'});
    this.loginButton = page.locator('button', {hasText: 'Login'});
  }

  async goto() {
    await this.page.goto('/');
  }

  async login() {
    await this.loginButton.click();
  }
}