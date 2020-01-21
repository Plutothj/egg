'use strict';

const Service = require('egg').Service;
var i = 0
class OrderService extends Service {
  async findUser() {
    const ctx = this.ctx;
    const result = await ctx.model.Order.find()
    
    return result;
  }
  async task() {
    
    
    return i;
  }
}

module.exports = OrderService;
