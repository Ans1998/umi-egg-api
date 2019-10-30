'use strict';
const Service = require('egg').Service;

class UserAddService extends Service {
  async index(obj) {
    let newTimes = new Date();
    let result = await this.app.mysql.insert('react_user_info', {
      ...obj,
      creact_time: newTimes,
      update_time: newTimes,
    });
    return result;
  }
}
module.exports = UserAddService;
