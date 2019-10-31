'use strict';
const Service = require('egg').Service;

class MenuQueryService extends Service {
  // 查询菜单
  async index() {
    const { ctx } = this;
    let userInfo = { ...ctx.state.userInfo };
    let result = [];
    if (userInfo.id === 1 && userInfo.name === 'root') {
      result = await this.app.mysql.select('react_menu_info');
      return result;
    }
    return result;
  }
}
module.exports = MenuQueryService;
