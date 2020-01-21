'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cors : {
    enable: true,
    package: 'egg-cors',
  },
  mongoose:{
    enable: true,
    package: 'egg-mongoose',
  },
  nunjucks : {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  httpProxy : {
    enable: true,
    package: 'egg-http-proxy',
  },
  validatePlus:{
    enable: true,
    package: 'egg-validate-plus',
  }
};
