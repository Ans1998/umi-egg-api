'use strict';
const Controller = require('egg').Controller;

class MenuQueryController extends Controller {
  // 菜单信息
  async index() {
    const { ctx } = this;
    try {
      let userMenu = await ctx.service.menu.query.index();
      if (!userMenu) {
        throw new Error('userMenu not found');
      }
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '查询菜单成功',
        data: userMenu,
      };
    } catch (err) {
      switch (err.message) {
        case 'userMenu not found':
          ctx.body = {
            code: 403,
            status: 'fail',
            msg: '查询菜单失败',
            data: {},
            e: err,
          };
          break;
        default:
          ctx.body = {
            code: 500,
            status: 'fail',
            msg: '获取数据异常',
            data: {},
            e: err,
          };
      }
    }
  }
}

module.exports = MenuQueryController;
