const uuidV4 = require('uuid/v4');

const CONSTANTS = {
  GENERAL: {
    PAYMENT_CC: '4111111111111111',
    EMAIL: 'test@testing.com',
    PASSWORD: 'test',
    FIRST_NAME: 'Testy',
    LAST_NAME: 'McTesterson',
    SUFFIX: 'MD',
    STREET_ADDRESS: '123 Main St',
    CITY: 'Townsville',
    ZIP: '90210',
  },
  HIPPO_ED: {
    BASE_PATH: 'https://hippostage.silverorange.com/hippo-ed/work-hive/dist',
    AUTH_PATH: 'https://antidote:cyanide@hippostage.silverorange.com/hippo-ed/work-hive/dist',
  },
  PCRAP: {
    BASE_PATH: 'https://hippostage.silverorange.com/pcrap/work-hive/www',
    AUTH_PATH: 'https://antidote:cyanide@hippostage.silverorange.com/pcrap/work-hive/www',
    FREE_ACCOUNT: `${uuidV4()}+free@testing.com`,
    PAID_ACCOUNT: `${uuidV4()}+paid@testing.com`,
  },
  EEM: {
    BASE_PATH: 'https://hippostage.silverorange.com/essentials/work-hive/www',
    AUTH_PATH: 'https://usce:heartmonitor@hippostage.silverorange.com/essentials/work-hive/www',
  },
};

module.exports = CONSTANTS;
