'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  // 用户信息
  async userInfo() {
    const { ctx } = this;
    try {
      const redisUserInfo = { ...ctx.state.userInfo };
      const userInfo = await ctx.service.user.index.findUser(redisUserInfo.id);
      if (!userInfo) {
        throw new Error('user not found');
      }
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '查询用户信息成功',
        data: userInfo,
      };
    } catch (err) {
      switch (err.message) {
        case 'user not found':
          ctx.body = {
            code: 403,
            status: 'fail',
            msg: '用户信息查询不在',
            data: {},
          };
          break;
        default:
          ctx.body = {
            code: 403,
            status: 'fail',
            msg: '获取数据异常',
            data: {},
          };
      }
    }
  }
}

module.exports = UserController;
