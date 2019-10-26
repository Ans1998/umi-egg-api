'use strict';
const Service = require('egg').Service;

class MenuDeleteService extends Service {
  // 删除菜单
  async index(obj) {
    let result = await this.app.mysql.delete('react_menu_info', {
      id: obj.id,
    });
    return result;
  }
}
module.exports = MenuDeleteService;
