'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  // 查询用户信息
  async findUser(uid) {
    const result = await this.app.mysql.get('react_user_info', { id: uid });
    return result;
  }
}
module.exports = UserService;
