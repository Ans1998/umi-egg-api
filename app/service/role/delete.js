'use strict';
const Service = require('egg').Service;

class RoleDeleteService extends Service {
  // 删除角色
  async index(obj) {
    let result = await this.app.mysql.delete('react_role_info', { ...obj });
    return result;
  }
}
module.exports = RoleDeleteService;
