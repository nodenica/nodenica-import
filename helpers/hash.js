var crypto = require('crypto');
var randomstring = require('randomstring');

exports.get = function() {
  var data = randomstring.generate(50)
  var result = crypto.createHash('sha1').update(data).digest('hex');

  return result;
}
