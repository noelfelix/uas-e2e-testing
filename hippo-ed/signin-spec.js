const CONSTANTS = require('./helpers').CONSTANTS;
const SELECTORS = require('./helpers').SELECTORS;
const HELPERS = require('./helpers').HELPERS;

describe('Hippo sign-in/sign-out', () => {
  browser.ignoreSynchronization = true;

  describe('sign-in: ', () => {
    it('navigates to signin', () => {
      browser.get(`${CONSTANTS.AUTH_PATH}/`);

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.AUTH_PATH}/`);
      });

      SELECTORS.SIGN_IN.$signinNav.click();

      HELPERS.waitForElement(SELECTORS.SIGN_IN.$signin);

      browser.getCurrentUrl().then(url => {
        console.log(url)
        expect(url).toEqual(`${CONSTANTS.BASE_PATH}/signin`);
      });
    });

    it('redirects to signin', () => {
      browser.get(`${CONSTANTS.BASE_PATH}/account-settings`);

      HELPERS.waitForElement(SELECTORS.SIGN_IN.$signin);

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.BASE_PATH}/signin`);
      });
    });

    it('warns user if no email', () => {
      browser.get(`${CONSTANTS.BASE_PATH}/signin`);

      SELECTORS.SIGN_IN.$passwordInput.sendKeys(CONSTANTS.PASSWORD);
      SELECTORS.SIGN_IN.$signin.click();
      SELECTORS.SIGN_IN.$emailWarning.getText().then((text) => {
        expect(text).toEqual('Email address is required')
      });
    });

    it('warns user if invalid email format', () => {
      browser.get(`${CONSTANTS.BASE_PATH}/signin`);

      SELECTORS.SIGN_IN.$emailInput.sendKeys('invalid');
      SELECTORS.SIGN_IN.$passwordInput.sendKeys(CONSTANTS.PASSWORD);
      SELECTORS.SIGN_IN.$signin.click();

      HELPERS.waitForElement(SELECTORS.SIGN_IN.$emailWarning);
      SELECTORS.SIGN_IN.$emailWarning.getText().then((text) => {
        expect(text).toEqual('Please enter a valid email address.')
      });
    });

    it('warns user if no password', () => {
      browser.get(`${CONSTANTS.BASE_PATH}/signin`);

      SELECTORS.SIGN_IN.$emailInput.sendKeys(CONSTANTS.EMAIL);
      SELECTORS.SIGN_IN.$signin.click();
      SELECTORS.SIGN_IN.$passwordWarning.getText().then((text) => {
        expect(text).toEqual('Password is required')
      });
    });

    it('fails signin with invalid email', () => {
      browser.get(`${CONSTANTS.BASE_PATH}/signin`);

      SELECTORS.SIGN_IN.$emailInput.sendKeys('invalid@silverorange.com');
      SELECTORS.SIGN_IN.$passwordInput.sendKeys(CONSTANTS.PASSWORD);
      SELECTORS.SIGN_IN.$signin.click();

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.BASE_PATH}/signin`);
      });
    });

    it('fails signin with invalid password', () => {
      browser.get(`${CONSTANTS.BASE_PATH}/signin`);

      SELECTORS.SIGN_IN.$emailInput.sendKeys(CONSTANTS.EMAIL);
      SELECTORS.SIGN_IN.$passwordInput.sendKeys('invalid');
      SELECTORS.SIGN_IN.$signin.click();

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.BASE_PATH}/signin`);
      });
    });

    it('signs in successfully', () => {
      browser.get(`${CONSTANTS.BASE_PATH}/signin`);

      SELECTORS.SIGN_IN.$emailInput.sendKeys(CONSTANTS.EMAIL);
      SELECTORS.SIGN_IN.$passwordInput.sendKeys(CONSTANTS.PASSWORD);
      SELECTORS.SIGN_IN.$signin.click();

      HELPERS.waitForElement(SELECTORS.ACCOUNT_SETTINGS.$accountSettingsNav);

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.BASE_PATH}/`);
      });
    });
  });

  describe('sign-out: ', () => {
    it('signs out successfully', () => {
      browser.get(`${CONSTANTS.BASE_PATH}/account-settings/general`);

      HELPERS.waitForElement(SELECTORS.SIGN_IN.$signOut);

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.BASE_PATH}/account-settings/general`);
      });

      SELECTORS.SIGN_IN.$signOut.click();

      HELPERS.waitForElement(SELECTORS.SIGN_IN.$signinNav);

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.BASE_PATH}/`);
      });
    });
  });
});
