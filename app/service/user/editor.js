'use strict';
const Service = require('egg').Service;

class MenuEditorService extends Service {
  // 编辑菜单
  async index(val) {
    let newTimes = new Date();
    let result = await this.app.mysql.update('react_menu_info', {
      id: val.id,
      name: val.name,
      url: val.url,
      updateTime: newTimes,
    });
    return result;
  }
}
module.exports = MenuEditorService;
