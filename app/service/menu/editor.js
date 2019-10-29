'use strict';
const Service = require('egg').Service;

class MenuEditorService extends Service {
  // 编辑菜单
  async index(obj) {
    let newTimes = new Date();
    let result = await this.app.mysql.update('react_menu_info', {
      ...obj,
      update_time: newTimes,
    });
    return result;
  }
}
module.exports = MenuEditorService;
