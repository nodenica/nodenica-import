var request = require('request');
var models = require('../models');
var api = require('../api');
var hash = require('../helpers/hash');

models.users.find({
  active: true
}, function(err, users) {
  if (err) {
    console.log(err);
  }
  else if (users) {
    users.forEach(function(user) {
      var userModel = {};
      userModel.username = user.username.toLowerCase();
      userModel.credentials = {
        firstName: user['first_name'],
        lastName: user['last_name']
      };
      userModel.email = user.email;
      userModel.created = user['created_at'];
      userModel.lastUpdated = new Date();
      userModel.emailVerified = true;
      userModel.verificationToken = hash.get();
      userModel.password = hash.get();

      request.post(api.url + '/Users', {form: userModel}, function(err, response, body) {
        console.log(body);
      })
    });
  }
});

/*
var model = {
  'realm': '',
  'username': '',
  'credentials': 'object',
  'challenges': 'object',
  'email': '',
  'emailVerified': false,
  'verificationToken': '',
  'status': '',
  'created': '',
  'lastUpdated': '',
  'id': 0,
  'member_id': 0
};
*/
