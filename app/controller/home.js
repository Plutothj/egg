'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async homeData() {
        var data = await this.ctx.curl('http://www.starday.shop/api/goods/getIndexGoods',{
            method:'post',
            dataType: 'json',
            // data:{
            //     app_key:"1631131B254DE57F3F60F4C307DF8D2D",
            //     name:'3333'
            // }
        })
        this.ctx.body = data.data
   }
}

module.exports = HomeController;
