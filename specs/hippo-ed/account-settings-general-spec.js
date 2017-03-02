const CONSTANTS = require('../constants');
const HELPERS = require('../helpers');
const SELECTORS = require('../selectors');

const accountSettingsPath = `${CONSTANTS.HIPPO_ED.AUTH_PATH}/account-settings/general`;

describe('Account Settings - General', () => {
  browser.ignoreSynchronization = true;

  it('navigates to account settings', () => {
    browser.get(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/signin`);

    SELECTORS.HIPPO_ED.SIGN_IN.$emailInput.sendKeys(CONSTANTS.GENERAL.EMAIL);
    SELECTORS.HIPPO_ED.SIGN_IN.$passwordInput.sendKeys(CONSTANTS.GENERAL.PASSWORD);
    SELECTORS.HIPPO_ED.SIGN_IN.$signin.click();

    HELPERS.waitForElement(SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$accountSettingsNav);

    SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$accountSettingsNav.click();

    HELPERS.waitForElement(SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit);

    browser.getCurrentUrl().then((url) => {
      expect(url).toEqual(accountSettingsPath);
    });
  });

  describe('Billing Address: ', () => {
    it('stores billing street address', () => {
      HELPERS.textInputHelper(
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$billingAddress,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores billing city', () => {
      HELPERS.textInputHelper(
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$billingCity,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores billing zip', () => {
      HELPERS.textInputHelper(
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$billingZip,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });
  });

  describe('Shipping Address: ', () => {
    it('stores shipping street address', () => {
      HELPERS.textInputHelper(
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$shippingAddress,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores shipping city', () => {
      HELPERS.textInputHelper(
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$shippingCity,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores shipping zip', () => {
      HELPERS.textInputHelper(
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$shippingZip,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });
  });

  describe('Comment Posting Profile: ', () => {

    it('stores alias', () => {
      HELPERS.textInputHelper(
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$commentsAlias,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores email', () => {
      HELPERS.textInputHelper(
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$commentsEmail,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });
  });

  describe('Professional Information: ', () => {

    it('stores hospital', () => {
      HELPERS.textInputHelper(
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$professionInstitution,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });
  });

  describe('Profile Information: ', () => {
    it('stores first name', () => {
      HELPERS.textInputHelper(
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$firstName,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores last name', () => {
      HELPERS.textInputHelper(
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$lastName,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores title', () => {
      HELPERS.textInputHelper(
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$suffix,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores phone number', () => {
      HELPERS.textInputHelper(
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$profilePhone,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });
  });
});
