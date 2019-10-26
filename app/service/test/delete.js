'use strict';
const Service = require('egg').Service;

class MenuDeleteService extends Service {
  // 删除
  async index(obj) {
    let result = await this.app.mysql.delete('xxx', { ...obj });
    return result;
  }
}
module.exports = MenuDeleteService;
