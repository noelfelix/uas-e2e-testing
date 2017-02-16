const fs = require('fs');
const path = require('path');

const specs = [];

fs
  .readdirSync(__dirname)
  .filter(name => fs.statSync(path.resolve(__dirname, name)).isDirectory() && name[0] !== '.')
  .forEach(dir => {
    require(path.join(__dirname, dir, 'conf.js')).specs.reduce((coll, item) => {
      coll.push(`${dir}/${item}`);
      return coll;
    }, specs);
  });

console.log(specs)

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs
};