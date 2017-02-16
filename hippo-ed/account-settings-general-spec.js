const CONSTANTS = require('./helpers').CONSTANTS;
const HELPERS = require('./helpers').HELPERS;
const SELECTORS = require('./helpers').SELECTORS;

const accountSettingsPath = `${CONSTANTS.BASE_PATH}/account-settings/general`;

describe('Account Settings - General', () => {
  browser.ignoreSynchronization = true;

  it('navigates to account settings', () => {
    browser.get(`${CONSTANTS.BASE_PATH}/signin`);

    SELECTORS.SIGN_IN.$emailInput.sendKeys(CONSTANTS.EMAIL);
    SELECTORS.SIGN_IN.$passwordInput.sendKeys(CONSTANTS.PASSWORD);
    SELECTORS.SIGN_IN.$signin.click();

    HELPERS.waitForElement(SELECTORS.ACCOUNT_SETTINGS.$accountSettingsNav);

    SELECTORS.ACCOUNT_SETTINGS.$accountSettingsNav.click();

    HELPERS.waitForElement(SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit);

    browser.getCurrentUrl().then((url) => {
      expect(url).toEqual(accountSettingsPath);
    });
  });

  describe('Billing Address: ', () => {
    it('stores billing street address', () => {
      HELPERS.textInputHelper(
        SELECTORS.ACCOUNT_SETTINGS.$billingAddress,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores billing city', () => {
      HELPERS.textInputHelper(
        SELECTORS.ACCOUNT_SETTINGS.$billingCity,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores billing zip', () => {
      HELPERS.textInputHelper(
        SELECTORS.ACCOUNT_SETTINGS.$billingZip,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });
  });

  describe('Shipping Address: ', () => {
    it('stores shipping street address', () => {
      HELPERS.textInputHelper(
        SELECTORS.ACCOUNT_SETTINGS.$shippingAddress,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores shipping city', () => {
      HELPERS.textInputHelper(
        SELECTORS.ACCOUNT_SETTINGS.$shippingCity,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores shipping zip', () => {
      HELPERS.textInputHelper(
        SELECTORS.ACCOUNT_SETTINGS.$shippingZip,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });
  });

  describe('Comment Posting Profile: ', () => {

    it('stores alias', () => {
      HELPERS.textInputHelper(
        SELECTORS.ACCOUNT_SETTINGS.$commentsAlias,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores email', () => {
      HELPERS.textInputHelper(
        SELECTORS.ACCOUNT_SETTINGS.$commentsEmail,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });
  });

  describe('Professional Information: ', () => {

    it('stores hospital', () => {
      HELPERS.textInputHelper(
        SELECTORS.ACCOUNT_SETTINGS.$professionInstitution,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });
  });

  describe('Profile Information: ', () => {
    it('stores first name', () => {
      HELPERS.textInputHelper(
        SELECTORS.ACCOUNT_SETTINGS.$profileName,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores last name', () => {
      HELPERS.textInputHelper(
        SELECTORS.ACCOUNT_SETTINGS.$profileLastName,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores title', () => {
      HELPERS.textInputHelper(
        SELECTORS.ACCOUNT_SETTINGS.$profileSuffix,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });

    it('stores phone number', () => {
      HELPERS.textInputHelper(
        SELECTORS.ACCOUNT_SETTINGS.$profilePhone,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit,
        SELECTORS.ACCOUNT_SETTINGS.$submitSuccess,
        SELECTORS.ACCOUNT_SETTINGS.$settingsSubmit
      );
    });
  });
});
