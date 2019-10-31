'use strict';
const Service = require('egg').Service;

class RoleQueryService extends Service {
  // 查询角色
  async index() {
    const { ctx } = this;
    let userInfo = { ...ctx.state.userInfo };
    let result = [];
    if (userInfo.id === 1 && userInfo.name === 'root') {
      result = await this.app.mysql.select('react_role_info');
    }
    return result;
  }
}
module.exports = RoleQueryService;
