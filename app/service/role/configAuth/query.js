'use strict';
const Service = require('egg').Service;

class RoleConfigAuthQueryService extends Service {
  // 查询角色
  async index(obj) {
    // const { ctx } = this;
    // let userInfo = { ...ctx.state.userInfo };
    let result = await this.app.mysql.select('react_menu_role', {
      where: { role_id: obj.role_id },
    });
    return result;
  }
}
module.exports = RoleConfigAuthQueryService;
