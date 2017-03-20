var mongoose = require("mongoose");
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var config = require('../config/main');
var userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  lastName: {
    type: String,
    required: true
  },
  hash: String,
  salt: String,
  createdOn: { type: Date, default: Date.now },

});
userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,'sha1').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    firstName: this.firstName,
    lastName: this.lastName,
    isAdmin: this.isAdmin,
    exp: parseInt(expiry.getTime() / 1000),
  }, config.secret);
};
// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;