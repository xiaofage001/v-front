'use strict';

module.exports.parse = function (json) {
  var profile = {};

  profile.id = json.user_id;
  profile.name = json.name;
  profile.scope = json.scope;
      
  return profile;
};
