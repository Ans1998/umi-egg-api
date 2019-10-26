'use strict';
const Service = require('egg').Service;

class RoleConfigAuthService extends Service {
  // 权限配置
  async index(obj) {
    let newTimes = new Date();
    let result = await this.app.mysql.update('react_menu_role', {
      ...obj,
      updateTime: newTimes,
    });
    return result;
  }
}
module.exports = RoleConfigAuthService;
