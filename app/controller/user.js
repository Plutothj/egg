"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
  async login() {
    console.log('---------',this.ctx.app.config)
    const {userName,password,type} =await this.ctx.request.body
    const validateResult = await this.ctx.validate('user.login', {userName,password,type});
    if (!validateResult) {
      return;
    }
    this.ctx.body  = await this.ctx.service.user.login({userName,password,type});
    
  }
  async register() {
    this.ctx.body = await this.ctx.service.user.Register();
  }
  async UserMain() {
    this.ctx.body = await this.ctx.service.user.UserMain()
    
  }
}

module.exports = UserController;
