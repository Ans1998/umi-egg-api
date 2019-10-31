'use strict';
const Service = require('egg').Service;

class RoleConfigAuthService extends Service {
  // 权限配置
  async add(obj) {
    let result = await this.app.mysql.insert('react_menu_role', {
      ...obj,
    });
    return result;
  }
  async editor(obj) {
    let result = await this.app.mysql.update('react_menu_role', { ...obj });
    return result;
  }
  async delete(obj) {
    let result = await this.app.mysql.delete('react_menu_role', { ...obj });
    return result;
  }
}
module.exports = RoleConfigAuthService;
