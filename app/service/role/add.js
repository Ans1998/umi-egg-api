'use strict';
const Service = require('egg').Service;

class RoleAddService extends Service {
  // 添加角色
  async index(obj) {
    let newTimes = new Date();
    let result = await this.app.mysql.insert('react_role_info', {
      ...obj,
      updateTime: newTimes,
    });
    return result;
  }
}
module.exports = RoleAddService;
