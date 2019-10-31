'use strict';
const Controller = require('egg').Controller;

class RoleConfigAuthController extends Controller {
  // 配置权限
  async index() {
    const { ctx } = this;
    try {
      let src = ctx.request.body;
      let res = null;
      // 定义创建接口的请求参数规则
      let createRule = {
        role_id: 'string',
        menu_arr: 'string',
      };
      // 使用参数校验
      ctx.validate(createRule, src);
      src.menu_arr = JSON.parse(src.menu_arr);
      // console.log(src.menu_arr);
      // 添加
      if (src.menu_arr.add && src.menu_arr.add.length > 0) {
        src.menu_arr.add.forEach(async(item) => {
          res = await ctx.service.role.configAuth.index.add(item);
        });
      }
      // 删除
      if (src.menu_arr.detele && src.menu_arr.detele.length > 0) {
        src.menu_arr.detele.forEach(async(item) => {
          res = await ctx.service.role.configAuth.index.delete(item);
        });
      }
      // 编辑(先写暂时用不上---如角色在菜单里面是否可以增删改)
      // if (src.menu_arr.editor && src.menu_arr.editor.length > 0) {
      //   src.menu_arr.editor.forEach(async(item) => {
      //     res = await ctx.service.role.configAuth.index.editor(item);
      //   });
      // }
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '配置权限成功',
        data: res,
      };
    } catch (e) {
      ctx.body = {
        code: 403,
        status: 'fail',
        msg: '配置权限失败',
        data: e,
        test: ctx.request.body,
      };
    }
  }
}

module.exports = RoleConfigAuthController;
