'use strict';
const Service = require('egg').Service;

class MenuAddService extends Service {
  // 添加
  async index(obj) {
    let newTimes = new Date();
    let result = await this.app.mysql.insert('xxx', {
      ...obj,
      updateTime: newTimes,
    });
    return result;
  }
}
module.exports = MenuAddService;
