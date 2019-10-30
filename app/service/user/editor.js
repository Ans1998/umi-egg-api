'use strict';
const Service = require('egg').Service;

class UserEditorService extends Service {
  // 编辑菜单
  async index(obj) {
    let newTimes = new Date();
    let result = await this.app.mysql.update('react_user_info', {
      ...obj,
      update_time: newTimes,
    });
    return result;
  }
}
module.exports = UserEditorService;
