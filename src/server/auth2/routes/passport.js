'use strict';

var express = require('express');

var router = express.Router();

var passport = require('passport'),
    User = require('../user'),
    ExampleStrategy = require('../passport-example/strategy').Strategy,
    oauthConfig = require('../oauth-config'),
    pConf = oauthConfig.provider,
    lConf = oauthConfig.consumer,
    opts = require('../oauth-consumer-config');

//passport配置
//调用done的时候才进行序列化
passport.serializeUser(function(user, done) {
  //console.log('serializeUser:', user);
  done(null, user);
});

//obj已经是从session中获取出来的了
passport.deserializeUser(function(obj, done) {
  //console.log('deserializeUser:', obj);
  var user = obj;
  done(null, user);
});

// passport策略配置
passport.use(new ExampleStrategy({
    clientID: opts.clientId
  , clientSecret: opts.clientSecret
  , callbackURL: lConf.protocol + "://" + lConf.host + "/auth/example-oauth2orize/callback"
  }
, function (accessToken, refreshToken, profile, done) {
    //console.log('profile:', profile);
    User.findOrCreate({ profile: profile }, function (err, user) {
      user.accessToken = accessToken;
      return done(err, user);
    });
  }
));
//模拟中间件进行路径拦截，从而跳过验证
router.all('/*', function(req, res, next) {
  if(req.user) {
    next('route');
  } else {
    next();
  }
}, passport.authenticate('exampleauth', { scope: ['email'] }));

//登出函数
router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

//页面初次发起请求时候请求地址
//router.get('/', passport.authenticate('exampleauth', { scope: ['email'] }));

// 访问provider服务器的请求
router.get('/userinfo', function (req, res, next) {
  if(req.user) {
    res.end(req.user);
  }
  var request = require('request')
    , options = {
        // url: pConf.protocol + '://' + pConf.host + '/api/exampleauth/me'
        url: pConf.protocol + '://' + pConf.host + '/api/userinfo'
      , headers: {
          'Authorization': 'Bearer ' + req.user.accessToken
        }
      }
    ;

  function callback(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.end(body);
    } else {
      res.end('error: \n' + body);
    }
  }

  request(options, callback);
});

//登陆成功后get方式回调的地址，此处只设置了一个错误重定向地址，成功的话，则跳往下一个路由
router.get('/auth/example-oauth2orize/callback', 
  passport.authenticate('exampleauth', 
    { successRedirect: '/index.html',failureRedirect: '/close.html?error=foo' }));

module.exports = router;