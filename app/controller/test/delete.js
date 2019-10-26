'use strict';
const Controller = require('egg').Controller;

class MenuDeleteController extends Controller {
  // 删除
  async index() {
    const { ctx } = this;
    try {
      let src = ctx.request.body;
      // 定义创建接口的请求参数规则
      let createRule = {
        id: 'string',
      };
      // 使用参数校验
      ctx.validate(createRule, src);
      let res = await ctx.service.test.delete.index(src);
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '删除菜单成功',
        data: res,
      };
    } catch (e) {
      ctx.body = {
        code: 403,
        status: 'fail',
        msg: '删除操作失败',
        data: e,
        test: ctx.request.body,
      };
    }
  }
}

module.exports = MenuDeleteController;
