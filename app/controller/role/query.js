'use strict';
const Controller = require('egg').Controller;

class RoleQueryController extends Controller {
  // 角色信息
  async index() {
    const { ctx } = this;
    try {
      const role = await ctx.service.role.query.index();
      if (!role) {
        throw new Error('role not found');
      }
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '查询角色成功',
        data: role,
      };
    } catch (err) {
      switch (err.message) {
        case 'role not found':
          ctx.body = {
            code: 403,
            status: 'fail',
            msg: '查询角色失败',
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

module.exports = RoleQueryController;
