'use strict';
const Service = require('egg').Service;

class MenuEditorService extends Service {
  // 编辑
  async index(val) {
    let newTimes = new Date();
    let result = await this.app.mysql.update('xxx', { ...val });
    return result;
  }
}
module.exports = MenuEditorService;
