'use strict';
const Controller = require('egg').Controller;

class ChildMenuAddController extends Controller {
  // 子菜单（添加、编辑）
  async index() {
    const { ctx } = this;
    try {
      let src = ctx.request.body;
      let res = null;
      // 定义创建接口的请求参数规则
      let createRule = {
        id: 'string',
        child: 'string',
      };
      // 使用参数校验
      ctx.validate(createRule, src);
      res = await ctx.service.menu.childMenu.add.index(src);
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '添加子菜单成功',
        data: res,
      };
    } catch (e) {
      ctx.body = {
        code: 403,
        status: 'fail',
        msg: '添加子菜单失败',
        data: e,
        test: ctx.request.body,
      };
    }
  }
}

module.exports = ChildMenuAddController;
