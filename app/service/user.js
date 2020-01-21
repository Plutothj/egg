"use strict";

const Service = require("egg").Service;
// const JWT = require('jsonwebtoken');

class UserService extends Service {
  async login(loginMsg) {
    var data = await this.ctx.curl('http://www.starday.shop/api/login',{
            method:'POST',
            contentType: 'json',
            dataType: 'json',
            data:loginMsg
    })
    return data;
  }
  // async Register() {
  //   const ctx = this.ctx;
  //   console.log("tag", ctx.request.body);

  //   let result = await ctx.model.User.findOne({ name: ctx.request.body.name });

  //   if (result) {
  //     return (result = {
  //       code: "0",
  //       message: "已注册"
  //     });
  //   };

  //   let res = await ctx.model.User.create(ctx.request.body);

  //   if (res) {
  //     return (res = {
  //       code: "1",
  //       message: "注册成功"
  //     });
  //   }
  // }
}

module.exports = UserService;
