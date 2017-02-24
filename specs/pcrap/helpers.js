const waitForElement = ($element) => {
  browser.wait(() => {
    return browser.isElementPresent($element);
  }, 5000);
};

module.exports = {
  CONSTANTS: {
    BASE_PATH: 'https://hippostage.silverorange.com/pcrap/trunk/www',
    AUTH_PATH: 'https://antidote:cyanide@hippostage.silverorange.com/pcrap/work-hive/www',
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
    handleStagingAlert: () => {
      let isAlert = false;

      browser.wait(() => {
        return browser.switchTo().alert().then(() => {
          isAlert = true;
          return true;
        }, () => false);
      }, 5000);

      if (isAlert) {
        browser.switchTo().alert().then(alert => console.log(alert))
      }
    }
  },
  SELECTORS: {
    SIGN_IN: {
      $episode: $('a.episode-guide-episode'),
      $emailInput: $('#email_address'),
      $passwordInput: $('#password'),
      $signin: $('[value="Sign In"]'),
      $signinNav: $('[href="account/sign-in"]'),
    },
  },
};
