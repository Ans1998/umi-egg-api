'use strict';
const Service = require('egg').Service;

class UserSetAuthService extends Service {
  async add(obj) {
    let result = await this.app.mysql.insert('react_user_role', {
      ...obj,
    });
    return result;
  }
  async editor(obj) {
    let result = await this.app.mysql.update('react_user_role', {
      ...obj,
    });
    return result;
  }
}
module.exports = UserSetAuthService;
