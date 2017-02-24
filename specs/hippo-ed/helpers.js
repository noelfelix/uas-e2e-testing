const waitForElement = ($element) => {
  browser.wait(() => {
    return browser.isElementPresent($element);
  }, 5000);
};

module.exports = {
  CONSTANTS: {
    BASE_PATH: 'https://hippostage.silverorange.com/hippo-ed/work-hive/dist',
    AUTH_PATH: 'https://antidote:cyanide@hippostage.silverorange.com/hippo-ed/work-hive/dist',
    EMAIL: 'test@testing.com',
    PASSWORD: 'test'
  },
  HELPERS: {
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
  },
  SELECTORS: {
    ACCOUNT_SETTINGS: {
      $accountSettingsNav: $('[href="/hippo-ed/work-hive/dist/account-settings/general"]'),
      $billingAddress: $('#billing_address'),
      $billingCity: $('#billing_city'),
      $billingZip: $('#billing_zip'),
      $commentsAlias: $('.comments-alias input'),
      $commentsEmail: $('.comments-email input'),
      $profileName: $('.profile-name input'),
      $profileLastName: $('.profile-lastname input'),
      $profileSuffix: $('.profile-suffix input'),
      $profilePhone: $('.profile-phone input'),
      $professionInstitution: $('.profession-institution input'),
      $settingsSubmit: $('[type="submit"]'),
      $shippingAddress: $('#shipping_address'),
      $shippingCity: $('#shipping_city'),
      $shippingZip: $('#shipping_zip'),
      $submitSuccess: $('div.alert.alert-success'),
    },
    SIGN_IN: {
      $emailInput: $('#email'),
      $emailWarning: $('.email small'),
      $passwordInput: $('#password'),
      $passwordWarning: $('.password small'),
      $signin: $('[value="Sign In"]'),
      $signinNav: $('[href="/signin"]'),
      $signOut: $('.item-sign-out a'),
    },
  },
};
