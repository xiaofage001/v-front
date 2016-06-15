(function () {
  'use strict';

  var cache = {};

  module.exports.findOrCreate = function (profile, cb) {
  	cache[profile.id] = profile;
    cb(null, profile);
  };

  module.exports.create = function() {

  };

  module.exports.read = function() {

  };

  
}());
