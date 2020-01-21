'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
    async text() {
        // var data = await this.ctx.schedule.update_data.task()
        console.log(this.ctx.app.cache)
    }
}

module.exports = OrderController;
