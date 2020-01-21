'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  
  // router.post('/register',controller.user.register)
  // router.get('/text',controller.order.text)
  router.get('/',controller.home.homeData)
  router.post('/login', controller.user.login);
 
};
