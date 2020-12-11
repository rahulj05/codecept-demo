const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/**/*-test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://app.solarcrm.com',
      show: true,
      browser: 'chromium'
    },
    VerbiageHelper: {
      require: './helpers/verbiage-helper.js',
    },
    MocksHelper: {
      require: './helpers/mocks-helper.js',
    },
  },
  include: {
    firstUser: './users/first-user-steps.js',
    secondUser: './users/second-user-steps.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}