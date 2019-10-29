'use strict';
const Service = require('egg').Service;

class MenuAddService extends Service {
  // 添加菜单
  async index(obj) {
    let newTimes = new Date();
    let result = await this.app.mysql.insert('react_menu_info', {
      ...obj,
      create_time: newTimes,
      update_time: newTimes,
    });
    return result;
  }
}
module.exports = MenuAddService;
