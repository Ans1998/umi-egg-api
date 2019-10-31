'use strict';
const Controller = require('egg').Controller;

class UserDeleteController extends Controller {
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
      let res = await ctx.service.user.delete.index(src);
      let roleForm = {
        user_id: src.id,
      };
      let userRole = await ctx.service.user.query.userRole(roleForm);
      userRole = JSON.parse(JSON.stringify(userRole));
      // console.log(userRole);
      if (userRole.length > 0) {
        userRole.forEach(async(item) => {
          let deteleUserRole = await ctx.service.user.delete.userRole(item);
        })
      }
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '删除用户成功',
        data: res,
      };
    } catch (e) {
      ctx.body = {
        code: 403,
        status: 'fail',
        msg: '删除用户失败',
        data: e,
        test: ctx.request.body,
      };
    }
  }
}

module.exports = UserDeleteController;
