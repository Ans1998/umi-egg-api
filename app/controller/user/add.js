'use strict';
const Controller = require('egg').Controller;

class UserAddController extends Controller {
  async index() {
    const { ctx } = this;
    try {
      let src = ctx.request.body;
      let res = null;
      // 定义创建接口的请求参数规则
      let createRule = {
        name: 'string',
        password: 'string',
      };
      // 使用参数校验
      ctx.validate(createRule, src);
      res = await ctx.service.user.add.index(src);
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '添加用户成功',
        data: res,
      };
    } catch (e) {
      ctx.body = {
        code: 403,
        status: 'fail',
        msg: '添加用户失败',
        data: e,
        test: ctx.request.body,
      };
    }
  }
}

module.exports = UserAddController;
