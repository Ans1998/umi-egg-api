'use strict';
const Controller = require('egg').Controller;

class RoleEditorController extends Controller {
  // 修改角色
  async index() {
    const { ctx } = this;
    try {
      let src = ctx.request.body;
      // 定义创建接口的请求参数规则
      let createRule = {
        id: 'string',
        name: 'string',
        describe: 'string',
      };
      // 使用参数校验
      ctx.validate(createRule, src);
      let res = await ctx.service.role.editor.index(src);
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '编辑角色成功',
        data: res,
      };
    } catch (e) {
      ctx.body = {
        code: 403,
        status: 'fail',
        msg: '编辑角色失败',
        data: e,
        test: ctx.request.body,
      };
    }
  }
}

module.exports = RoleEditorController;
