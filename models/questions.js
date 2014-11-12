exports.setup = function(_mongoose, _db) {

  var fileName = require('path').basename(__filename, '.js');

  var schema = _mongoose.Schema({
    slug: {
      type: String,
      index: {
        unique: true
      }
    },
    title: String,
    content: String,
    author: {
      username: String,
      email: String,
      avatar: String
    },
    'created_at': {
      type: Date,
      default: Date.now
    },
    responses: [{
      author: {
        username: String,
        email: String,
        avatar: String
      },
      content: String,
      'created_at': {
        type: Date,
        default: Date.now
      },
      votes: [{
        username: String,
        'created_at': {
          type: Date,
          default: Date.now
        }
      }]
    }]
  });

  _db.model(fileName, schema);

  var data = _db.model(fileName);

  return data;
};
