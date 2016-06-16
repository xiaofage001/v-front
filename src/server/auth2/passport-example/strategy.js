'use strict';

var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError
  , parse = require('./profile').parse
  , pConf = require('../oauth-config').provider
  ;


function Strategy(options, verify) {
  var me = this
    ;

  options = options || {};
  options.authorizationURL = 
    options.authorizationURL || 
    options.authorizationUrl ||
    (pConf.protocol + '://' + pConf.host + '/dialog/authorize')
    ;
  options.tokenURL =
    options.tokenURL ||
    options.tokenUrl ||
    (pConf.protocol + '://' + pConf.host + '/oauth/token')
    ;
  
  OAuth2Strategy.call(me, options, verify);

  //策略的配置名称
  me.name = 'exampleauth';
}
//从OAuth2Strategy中继承
util.inherits(Strategy, OAuth2Strategy);

//获取用户profile
Strategy.prototype.userProfile = function (accessToken, done) {
  var me = this;
  me._oauth2.get(
    pConf.protocol + '://' + pConf.host + pConf.profileUrl
  , accessToken
  , function (err, body/*, res*/) {
      var json
        , profile
        ;
      if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }

      //console.log('profile body:', body);
      
      if ('string' === typeof body) {
        try { json = JSON.parse(body); }
        catch(e) { done(e); return; }
      } else if ('object' === typeof body) {
        json = body;
      }

      profile = parse(json);
      profile.provider = me.name;
      profile._raw = body;
      profile._json = json;

      done(null, profile);
    }
  );
};

module.exports.Strategy = Strategy.Strategy = Strategy;
