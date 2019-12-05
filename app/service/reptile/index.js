'use strict';
const Service = require('egg').Service;

class ReptileAddService extends Service {
  // 添加
  async add(obj) {
    let newTimes = new Date();
    let form = {
      url: obj.url,
      status: 0,
      userIdPrefix: obj.userIdPrefix,
      scopeStart: obj.scope.start,
      scopeEnd: obj.scope.end,
    };
    let result = await this.app.mysql.insert('weibo_capture_record', {
      ...form,
      // update_time: newTimes,
      create_time: newTimes,
    });
    return result;
  }
  // 查询
  async query() {
    let result = await this.app.mysql.select('weibo_capture_record');
    return result;
  }
  // 删除
  async delete(obj) {
    let result = await this.app.mysql.delete('weibo_capture_record', {
      ...obj,
    });
    return result;
  }
}
module.exports = ReptileAddService;
