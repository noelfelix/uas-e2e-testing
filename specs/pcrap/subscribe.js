const CONSTANTS = require('../constants');
const HELPERS = require('../helpers');
const SELECTORS = require('../selectors');

const accountSettingsPath = `${CONSTANTS.HIPPO_ED.AUTH_PATH}/account-settings/general`;

describe('PCRAP subscribe', () => {
  browser.ignoreSynchronization = true;

  it('signs up for a free account, signs in, stores correct user data, signs out', () => {
    browser.get(`${CONSTANTS.PCRAP.AUTH_PATH}/`);

    SELECTORS.PCRAP.SUBSCRIBE.$subscribe.click();

    SELECTORS.PCRAP.SUBSCRIBE.$email.sendKeys(CONSTANTS.PCRAP.FREE_ACCOUNT);
    SELECTORS.PCRAP.SUBSCRIBE.$first_name.sendKeys(CONSTANTS.GENERAL.FIRST_NAME);
    SELECTORS.PCRAP.SUBSCRIBE.$last_name.sendKeys(CONSTANTS.GENERAL.LAST_NAME);
    SELECTORS.PCRAP.SUBSCRIBE.$suffix.sendKeys(CONSTANTS.GENERAL.SUFFIX);
    SELECTORS.PCRAP.SUBSCRIBE.$password.sendKeys(CONSTANTS.GENERAL.PASSWORD);
    SELECTORS.PCRAP.SUBSCRIBE.$continue.click();

    SELECTORS.PCRAP.SUBSCRIBE.$agree.click();

    SELECTORS.PCRAP.SUBSCRIBE.$profession_option.click();
    SELECTORS.PCRAP.SUBSCRIBE.$get_started.click();

    browser.get(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/account-settings/general`);

    browser.getCurrentUrl().then((url) => {
      expect(url).toEqual(accountSettingsPath);
    });

    HELPERS.waitForElement(SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$firstName);

    SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$firstName.getAttribute('value').then((text) => {
      expect(text).toEqual(`${CONSTANTS.GENERAL.FIRST_NAME}`)
    });

    SELECTORS.HIPPO_ED.SIGN_IN.$signOut.click();

    HELPERS.waitForElement(SELECTORS.HIPPO_ED.SIGN_IN.$signinNav);

    browser.getCurrentUrl().then((url) => {
      expect(url).toEqual(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/`);
    });
  });

  it('signs up for a free account, signs in, stores correct user data, signs out', () => {
    browser.get(`${CONSTANTS.PCRAP.AUTH_PATH}/`);

    SELECTORS.PCRAP.SUBSCRIBE.$subscribe.click();

    SELECTORS.PCRAP.SUBSCRIBE.$subscription_option.click();

    SELECTORS.PCRAP.SUBSCRIBE.$email.sendKeys(CONSTANTS.PCRAP.PAID_ACCOUNT);
    SELECTORS.PCRAP.SUBSCRIBE.$first_name.sendKeys(CONSTANTS.GENERAL.FIRST_NAME);
    SELECTORS.PCRAP.SUBSCRIBE.$last_name.sendKeys(CONSTANTS.GENERAL.LAST_NAME);
    SELECTORS.PCRAP.SUBSCRIBE.$suffix.sendKeys(CONSTANTS.GENERAL.SUFFIX);

    SELECTORS.PCRAP.SUBSCRIBE.$billing_first.sendKeys(CONSTANTS.GENERAL.FIRST_NAME);
    SELECTORS.PCRAP.SUBSCRIBE.$billing_last.sendKeys(CONSTANTS.GENERAL.LAST_NAME);
    SELECTORS.PCRAP.SUBSCRIBE.$billing_address1.sendKeys(CONSTANTS.GENERAL.STREET_ADDRESS);
    SELECTORS.PCRAP.SUBSCRIBE.$billing_city.sendKeys(CONSTANTS.GENERAL.CITY);
    SELECTORS.PCRAP.SUBSCRIBE.$billing_zip.sendKeys(CONSTANTS.GENERAL.ZIP);

    SELECTORS.PCRAP.SUBSCRIBE.$password.sendKeys(CONSTANTS.GENERAL.PASSWORD);

    SELECTORS.PCRAP.SUBSCRIBE.$cardNumber.sendKeys(CONSTANTS.GENERAL.PAYMENT_CC);
    SELECTORS.PCRAP.SUBSCRIBE.$CVV.sendKeys('123');
    $('[value="TaRgsJh8PzqvR6zwa5Wjcg|i:1;"]').click();
    $('[value="ZGIN3eP3*vnEk8TbtPH*8A|i:2026;"]').click();
    $('[value="157"]').click();

    SELECTORS.PCRAP.SUBSCRIBE.$continue.click();

    HELPERS.waitForElement(SELECTORS.PCRAP.SUBSCRIBE.$order);

    SELECTORS.PCRAP.SUBSCRIBE.$order.click();

    HELPERS.waitForElement(SELECTORS.PCRAP.SUBSCRIBE.$agree);

    SELECTORS.PCRAP.SUBSCRIBE.$agree.click();

    SELECTORS.PCRAP.SUBSCRIBE.$profession_option.click();
    SELECTORS.PCRAP.SUBSCRIBE.$get_started.click();

    browser.get(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/account-settings/general`);

    browser.getCurrentUrl().then((url) => {
      expect(url).toEqual(accountSettingsPath);
    });

    HELPERS.waitForElement(SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$firstName);

    SELECTORS.HIPPO_ED.ACCOUNT_SETTINGS.$firstName.getAttribute('value').then((text) => {
      expect(text).toEqual(`${CONSTANTS.GENERAL.FIRST_NAME}`)
    });

    SELECTORS.HIPPO_ED.SIGN_IN.$signOut.click();

    HELPERS.waitForElement(SELECTORS.HIPPO_ED.SIGN_IN.$signinNav);

    browser.getCurrentUrl().then((url) => {
      expect(url).toEqual(`${CONSTANTS.HIPPO_ED.AUTH_PATH}/`);
    });
  });
});
