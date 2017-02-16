const CONSTANTS = require('./helpers').CONSTANTS;
const SELECTORS = require('./helpers').SELECTORS;
const HELPERS = require('./helpers').HELPERS;

describe('PCRAP sign-in', () => {
  browser.ignoreSynchronization = true;

  describe('sign-in: ', () => {
    it('navigates to signin', () => {
      browser.get(`${CONSTANTS.AUTH_PATH}/`);

      browser.getCurrentUrl().then(url => {
        console.log(url)
        expect(url).toEqual(`${CONSTANTS.AUTH_PATH}/`);
      });

      SELECTORS.SIGN_IN.$signinNav.click();

      HELPERS.waitForElement(SELECTORS.SIGN_IN.$signin);

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.BASE_PATH}/account/sign-in`);
      });
    });

    it('fails signin with invalid email', () => {
      browser.get(`${CONSTANTS.BASE_PATH}/account/sign-in`);

      SELECTORS.SIGN_IN.$emailInput.sendKeys('invalid@silverorange.com');
      SELECTORS.SIGN_IN.$passwordInput.sendKeys(CONSTANTS.PASSWORD);
      SELECTORS.SIGN_IN.$signin.click();

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.BASE_PATH}/account/sign-in`);
      });
    });

    it('fails signin with invalid password', () => {
      browser.get(`${CONSTANTS.BASE_PATH}/account/sign-in`);

      SELECTORS.SIGN_IN.$emailInput.sendKeys(CONSTANTS.EMAIL);
      SELECTORS.SIGN_IN.$passwordInput.sendKeys('invalid');
      SELECTORS.SIGN_IN.$signin.click();

      browser.getCurrentUrl().then(url => {
        expect(url).toEqual(`${CONSTANTS.BASE_PATH}/account/sign-in`);
      });
    });

    it('signs in successfully', () => {
      browser.get(`${CONSTANTS.BASE_PATH}/account/sign-in`);

      SELECTORS.SIGN_IN.$emailInput.sendKeys(CONSTANTS.EMAIL);
      SELECTORS.SIGN_IN.$passwordInput.sendKeys(CONSTANTS.PASSWORD);
      SELECTORS.SIGN_IN.$signin.click();

      HELPERS.waitForElement(SELECTORS.SIGN_IN.$episode);

      browser.getCurrentUrl().then(url => {
        expect(url.includes('episode')).toEqual(true);
      });
    });

    it('redirects to episode if signed in', () => {
      browser.get(`${CONSTANTS.BASE_PATH}/`);

      HELPERS.waitForElement(SELECTORS.SIGN_IN.$episode);

      browser.getCurrentUrl().then(url => {
        expect(url.includes('episode')).toEqual(true);
      });
    });
  });
});
