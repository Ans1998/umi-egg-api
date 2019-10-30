'use strict';
const Controller = require('egg').Controller;

class UserSetAuthController extends Controller {
  async add() {
    const { ctx } = this;
    try {
      let src = ctx.request.body;
      let res = null;
      // 定义创建接口的请求参数规则
      let createRule = {
        role_id: 'string',
        user_id: 'string',
      };
      // 使用参数校验
      ctx.validate(createRule, src);
      res = await ctx.service.user.setAuth.index.add(src);
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '设置权限成功',
        data: res,
      };
    } catch (e) {
      ctx.body = {
        code: 403,
        status: 'fail',
        msg: '设置权限失败',
        data: e,
        test: ctx.request.body,
      };
    }
  }
  async editor() {
    const { ctx } = this;
    try {
      let src = ctx.request.body;
      let res = null;
      // 定义创建接口的请求参数规则
      let createRule = {
        id: 'string',
        role_id: 'string',
        user_id: 'string',
      };
      // 使用参数校验
      ctx.validate(createRule, src);
      res = await ctx.service.user.setAuth.index.editor(src);
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '设置权限成功',
        data: res,
      };
    } catch (e) {
      ctx.body = {
        code: 403,
        status: 'fail',
        msg: '设置权限失败',
        data: e,
        test: ctx.request.body,
      };
    }
  }
}

module.exports = UserSetAuthController;
