'use strict';
const Service = require('egg').Service;

class ChildMenuAddService extends Service {
  // 添加、编辑子菜单
  async index(val) {
    let newTimes = new Date();
    let result = await this.app.mysql.update('react_menu_info', {
      id: val.id,
      child: val.child,
      updateTime: newTimes,
    });
    return result;
  }
}
module.exports = ChildMenuAddService;
