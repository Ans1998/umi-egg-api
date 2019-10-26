'use strict';
const Service = require('egg').Service;

class LoginService extends Service {
  // 查询用户信息
  async findUser(data) {
    let result = await this.app.mysql.get('react_user_info', { name: data.userName, password: data.password });
    return result;
  }
  // 进redis
  async redisSetUserToken(key, value) {
    let state = await this.app.redis.set(key, value);
    return state;
  }
  // 查redis
  async redisGetUserToken(key) {
    let data = await this.app.redis.get(key);
    return data;
  }
  // 删redis
  async redisDelUserToken(key) {
    let data = await this.app.redis.del(key);
    return data;
  }
}
module.exports = LoginService;
