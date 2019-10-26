'use strict';
const Service = require('egg').Service;

class RoleEditorService extends Service {
  // 编辑角色
  async index(obj) {
    let newTimes = new Date();
    let result = await this.app.mysql.update('react_role_info', {
      ...obj,
      updateTime: newTimes,
    });
    return result;
  }
}
module.exports = RoleEditorService;
