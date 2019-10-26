'use strict';
const Service = require('egg').Service;

class MenuQueryService extends Service {
  // 查询
  async index() {
    // const { ctx } = this;
    // let userInfo = { ...ctx.state.userInfo };
    let result = await this.app.mysql.select('xxx');
    return result;
  }
}
module.exports = MenuQueryService;
