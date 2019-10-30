'use strict';
const Controller = require('egg').Controller;

class UserQueryController extends Controller {
  async index() {
    const { ctx } = this;
    try {
      let res = await ctx.service.user.query.index();
      if (!res) {
        throw new Error('userInfo not found');
      }
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '查询用户成功',
        data: res,
      };
    } catch (err) {
      switch (err.message) {
        case 'userInfo not found':
          ctx.body = {
            code: 403,
            status: 'fail',
            msg: '查询用户失败',
            data: {},
          };
          break;
        default:
          ctx.body = {
            code: 500,
            status: 'fail',
            msg: '获取数据异常',
            data: {},
          };
      }
    }
  }
}

module.exports = UserQueryController;
