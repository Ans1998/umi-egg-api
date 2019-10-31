'use strict';

const Controller = require('egg').Controller;

// get
// let query = ctx.params;
// post
// let query = ctx.request.body;

class LoginController extends Controller {
  async login() {
    const { ctx } = this;
    try {
      // 定义创建接口的请求参数规则
      let createRule = {
        userName: 'string',
        password: 'string',
      };
      // 使用参数校验
      ctx.validate(createRule, ctx.request.body);
      let userInfo = await ctx.service.login.index.findUser(ctx.request.body);
      userInfo = JSON.parse(JSON.stringify(userInfo));
      if (userInfo.status === 0) {
        ctx.body = {
          code: 200,
          status: 'fail',
          msg: '用户状态未开启, 请联系管理员',
          data: { userInfo },
        };
        return false
      }
      const token = ctx.helper.loginToken({ userInfo }, 7200); // token生成
      await ctx.service.login.index.redisSetUserToken(userInfo.id, token);
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '登录成功',
        data: { userInfo, token },
      };
    } catch (err) {
      ctx.logger.warn(err.errors);
      if (err.errors) {
        ctx.body = {
          code: 200,
          status: 'fail',
          msg: err.errors,
          data: ctx.request.body,
        };
      } else {
        ctx.body = {
          code: 403,
          status: 'fail',
          msg: '请检查用户名及密码',
          data: { body: ctx.request.body },
        };
      }
      return false;
    }
  }
  async logOut() {
    const { ctx } = this;
    try {
      let userInfo = { ...ctx.state.userInfo };
      let res = await ctx.service.login.index.redisDelUserToken(userInfo.id);
      if (!res) {
        throw new Error('userInfo not found');
      }
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '退出登录成功',
        data: {},
      };
    } catch (e) {
      switch (e.message) {
        case 'userInfo not found':
          ctx.body = {
            code: 403,
            status: 'fail',
            msg: '退出登录失败',
            data: {},
          };
          break;
        default:
          ctx.body = {
            code: 403,
            status: 'fail',
            msg: '数据异常',
            data: {},
          };
      }
    }
  }
}

module.exports = LoginController;
