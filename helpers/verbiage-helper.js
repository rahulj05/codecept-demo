const Helper = require('@codeceptjs/helper');

class VerbiageHelper extends Helper {
  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

  sees(url) {
    return this.helpers.Playwright.see(url)
  }

  goesToPage(url) {
    const { page } = this.helpers.Playwright;
    return page.goto(url)
  }

  seesInCurrentUrl(url) {
    return this.helpers.Playwright.seeInCurrentUrl(url)
  }
}

module.exports = VerbiageHelper;
