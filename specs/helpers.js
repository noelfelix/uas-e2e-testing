const SELECTORS = require('./selectors');
const CONSTANTS = require('./constants');

const waitForElement = ($element) => {
  browser.wait(() => {
    return browser.isElementPresent($element);
  }, 20000);
};
const HELPERS = {
  waitForElement,
  textInputHelper: (inputSelector, submitSelector, reloadSignalSelector, reloadSuccessSelector) => {
    inputSelector
      .getAttribute('value')
      .then((value) => {
        const newValue = [...value].reverse().join('');
        inputSelector
          .clear()
          .then(() => {
            inputSelector.sendKeys(newValue)
          });
        submitSelector.click();

        waitForElement(reloadSignalSelector);

        browser.executeScript('location.reload({ "forceGet": true });');

        waitForElement(reloadSuccessSelector);

        inputSelector
          .getAttribute('value')
          .then((value) => {
            expect(value).toEqual(newValue);
          });
      });
  },
  signIn: () => {
    browser.get(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/signin`);

    SELECTORS.HIPPO_ED.SIGN_IN.$emailInput.sendKeys(CONSTANTS.GENERAL.EMAIL);
    SELECTORS.HIPPO_ED.SIGN_IN.$passwordInput.sendKeys(CONSTANTS.GENERAL.PASSWORD);
    SELECTORS.HIPPO_ED.SIGN_IN.$signin.click();

    waitForElement(SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$accountSettingsNav);
  }
};

module.exports = HELPERS;
