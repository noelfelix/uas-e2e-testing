const CONSTANTS = require('../constants');
const HELPERS = require('../helpers');
const SELECTORS = require('../selectors');

describe('EEM register', () => {
  browser.ignoreSynchronization = true;

  it('registers for EEM and has a free account', () => {
    browser.get(`${CONSTANTS.EEM.AUTH_PATH}/`);

    SELECTORS.EEM.$register.click();
    SELECTORS.EEM.$register2.click();

    SELECTORS.EEM.$first_name.sendKeys(CONSTANTS.GENERAL.FIRST_NAME);
    SELECTORS.EEM.$last_name.sendKeys(CONSTANTS.GENERAL.LAST_NAME);
    SELECTORS.EEM.$email.sendKeys(CONSTANTS.PCRAP.FREE_ACCOUNT);
    SELECTORS.EEM.$confirmEmail.sendKeys(CONSTANTS.PCRAP.FREE_ACCOUNT);
    SELECTORS.EEM.$password.sendKeys(CONSTANTS.GENERAL.PASSWORD);

    SELECTORS.EEM.$billing_first.sendKeys(CONSTANTS.GENERAL.FIRST_NAME);
    SELECTORS.EEM.$billing_last.sendKeys(CONSTANTS.GENERAL.LAST_NAME);
    SELECTORS.EEM.$billing_address1.sendKeys(CONSTANTS.GENERAL.STREET_ADDRESS);
    SELECTORS.EEM.$billing_city.sendKeys(CONSTANTS.GENERAL.CITY);
    SELECTORS.EEM.$billing_zip.sendKeys(CONSTANTS.GENERAL.ZIP);
    $('[value="157"]').click();

    SELECTORS.PCRAP.SUBSCRIBE.$cardNumber.sendKeys(CONSTANTS.GENERAL.PAYMENT_CC);
    SELECTORS.PCRAP.SUBSCRIBE.$CVV.sendKeys('123');
    $('[value="pi7N2-TOs7aCmaEjoOA9iQ|i:2021;"]').click();

    SELECTORS.EEM.$submit_button.click();
    // SELECTORS.EEM.$order.click();
  });
});
