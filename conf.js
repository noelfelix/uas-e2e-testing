const fs = require('fs');
const path = require('path');

const specs = [];
const SPEC_PARENT_FOLDER = 'specs'

fs
  .readdirSync(path.resolve(__dirname, SPEC_PARENT_FOLDER))
  .filter(name => fs.statSync(path.resolve(__dirname, SPEC_PARENT_FOLDER, name)).isDirectory())
  .forEach(dir => {
    require(path.join(__dirname, SPEC_PARENT_FOLDER, dir, 'conf.js')).specs.reduce((coll, item) => {
      coll.push(`${SPEC_PARENT_FOLDER}/${dir}/${item}`);
      return coll;
    }, specs);
  });

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs,
  allScriptsTimeout: 20000,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
    isVerbose: true
  },
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 4
  },
};
