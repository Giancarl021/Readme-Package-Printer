const fs = require('fs');
const path = require('path');
const renderResult = require('./render');

module.exports = function () {
    const md = fs.readFileSync(path.resolve(__dirname, '..', 'util', 'help.md'), 'utf8');
    console.log(renderResult(md, false));
}