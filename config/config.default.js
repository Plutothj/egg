/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1566364588881_6547";

  // add your middleware config here
  // config.middleware = ['token'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
  };
  config.security = {
    // 关闭csrf验证
    csrf: {
      enable: false
    },
    // 白名单
    domainWhiteList: ["*"]
  };
  // config.mongoose = {
  //   url: "mongodb://127.0.0.1:27017/info",
  //   options: {}
  // };
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };
  config.jwt = {
    secret:'egg-api-jwt'
  };
  config.middleware = [
    'jwt'
  ];
  config.httpProxy = {
    // '/api': 'http://192.168.100.7:83'
    
    '/api': 'http://www.starday.shop'
  };
  config.validatePlus = {
    resolveError(ctx, errors) {
      if (errors.length) {
        ctx.type = 'json';
        ctx.status = 400;
        ctx.body = {
          code: 400,
          error: errors,
          message: '参数错误',
        };
      }
    }
  };
  return {
    ...config,
    ...userConfig
  };
};
