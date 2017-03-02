const CONSTANTS = require('../constants');
const HELPERS = require('../helpers');
const SELECTORS = require('../selectors');

describe('Hippo sign-in/sign-out', () => {
  browser.ignoreSynchronization = true;

  describe('sign-in: ', () => {
    it('navigates to signin', () => {
      browser.get(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/`);

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/`);
      });

      SELECTORS.HIPPO_ED.SIGN_IN.$signinNav.click();

      HELPERS.waitForElement(SELECTORS.HIPPO_ED.SIGN_IN.$signin);

      browser.getCurrentUrl().then(url => {
        console.log(url)
        expect(url).toEqual(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/signin`);
      });
    });

    it('redirects to signin', () => {
      browser.get(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/account-settings`);

      HELPERS.waitForElement(SELECTORS.HIPPO_ED.SIGN_IN.$signin);

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/signin`);
      });
    });

    it('warns user if no email', () => {
      browser.get(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/signin`);

      SELECTORS.HIPPO_ED.SIGN_IN.$passwordInput.sendKeys(CONSTANTS.GENERAL.PASSWORD);
      SELECTORS.HIPPO_ED.SIGN_IN.$signin.click();
      SELECTORS.HIPPO_ED.SIGN_IN.$emailWarning.getText().then((text) => {
        expect(text).toEqual('Email address is required')
      });
    });

    it('warns user if invalid email format', () => {
      browser.get(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/signin`);

      SELECTORS.HIPPO_ED.SIGN_IN.$emailInput.sendKeys('invalid');
      SELECTORS.HIPPO_ED.SIGN_IN.$passwordInput.sendKeys(CONSTANTS.GENERAL.PASSWORD);
      SELECTORS.HIPPO_ED.SIGN_IN.$signin.click();

      HELPERS.waitForElement(SELECTORS.HIPPO_ED.SIGN_IN.$emailWarning);
      SELECTORS.HIPPO_ED.SIGN_IN.$emailWarning.getText().then((text) => {
        expect(text).toEqual('Please enter a valid email address.')
      });
    });

    it('warns user if no password', () => {
      browser.get(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/signin`);

      SELECTORS.HIPPO_ED.SIGN_IN.$emailInput.sendKeys(CONSTANTS.GENERAL.EMAIL);
      SELECTORS.HIPPO_ED.SIGN_IN.$signin.click();
      SELECTORS.HIPPO_ED.SIGN_IN.$passwordWarning.getText().then((text) => {
        expect(text).toEqual('Password is required')
      });
    });

    it('fails signin with invalid email', () => {
      browser.get(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/signin`);

      SELECTORS.HIPPO_ED.SIGN_IN.$emailInput.sendKeys('invalid@silverorange.com');
      SELECTORS.HIPPO_ED.SIGN_IN.$passwordInput.sendKeys(CONSTANTS.GENERAL.PASSWORD);
      SELECTORS.HIPPO_ED.SIGN_IN.$signin.click();

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/signin`);
      });
    });

    it('fails signin with invalid password', () => {
      browser.get(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/signin`);

      SELECTORS.HIPPO_ED.SIGN_IN.$emailInput.sendKeys(CONSTANTS.GENERAL.EMAIL);
      SELECTORS.HIPPO_ED.SIGN_IN.$passwordInput.sendKeys('invalid');
      SELECTORS.HIPPO_ED.SIGN_IN.$signin.click();

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/signin`);
      });
    });

    it('signs in successfully', () => {
      browser.get(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/signin`);

      SELECTORS.HIPPO_ED.SIGN_IN.$emailInput.sendKeys(CONSTANTS.GENERAL.EMAIL);
      SELECTORS.HIPPO_ED.SIGN_IN.$passwordInput.sendKeys(CONSTANTS.GENERAL.PASSWORD);
      SELECTORS.HIPPO_ED.SIGN_IN.$signin.click();

      HELPERS.waitForElement(SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$accountSettingsNav);

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/`);
      });
    });
  });

  describe('sign-out: ', () => {
    it('signs out successfully', () => {
      browser.get(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/account-settings/general`);

      HELPERS.waitForElement(SELECTORS.HIPPO_ED.SIGN_IN.$signOut);

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/account-settings/general`);
      });

      SELECTORS.HIPPO_ED.SIGN_IN.$signOut.click();

      HELPERS.waitForElement(SELECTORS.HIPPO_ED.SIGN_IN.$signinNav);

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/`);
      });
    });
  });
});
