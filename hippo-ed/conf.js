const specs = ['signin-spec.js', 'account-settings-general-spec.js'];

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs
};

module.exports = { specs };