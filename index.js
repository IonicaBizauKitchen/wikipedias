var fs = require('fs');
var wikipedias = module.exports = {}

JSON.parse(fs.readFileSync(__dirname + '/data.json')).map(function (w) {
  wikipedias[w.code] = w;
})