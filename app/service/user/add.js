'use strict';
const Service = require('egg').Service;

class MenuAddService extends Service {
  // 添加菜单
  async index(obj) {
    let newTimes = new Date();
    let result = await this.app.mysql.insert('react_menu_info', {
      name: obj.name,
      url: obj.url,
      child: obj.child,
      updateTime: newTimes,
    });
    return result;
  }
}
module.exports = MenuAddService;
