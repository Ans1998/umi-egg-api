'use strict';
const Controller = require('egg').Controller;

class MenuEditorController extends Controller {
  // 修改
  async index() {
    const { ctx } = this;
    try {
      let src = ctx.request.body;
      let res = null;
      // 定义创建接口的请求参数规则
      let createRule = {
        id: 'string',
        name: 'string',
        url: 'string',
      };
      // 使用参数校验
      ctx.validate(createRule, src);
      res = await ctx.service.test.editor.index(src);
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '编辑菜单成功',
        data: {},
      };
    } catch (e) {
      ctx.body = {
        code: 403,
        status: 'fail',
        msg: '编辑菜单失败',
        data: e,
        test: ctx.request.body,
      };
    }
  }
}

module.exports = MenuEditorController;
