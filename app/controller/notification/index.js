'use strict';
const Controller = require('egg').Controller;

class NotificationController extends Controller {
  async pushStorage() {
    const { ctx, app } = this;
    try {
      let userInfo = { ...ctx.state.userInfo };
      let src = ctx.request.body;
      console.log('---进库通知----', src);
      // console.log('userInfo', userInfo);
      const id = await app.redis.get('10').get('socket_id_' + userInfo.id); // 获取 ID
      app.io.sockets.connected[id].emit('res', src);// 发送数据
      // ctx.body = {
      //   code: 200,
      //   status: 'success',
      //   msg: '通知成功',
      //   data: userMenu,
      // };
    } catch (err) {
      ctx.body = {
        code: 500,
        status: 'fail',
        msg: '通知异常',
        data: {},
      };
    }
  }
  async deleteCsv() {
    const { ctx, app } = this;
    try {
      let userInfo = { ...ctx.state.userInfo };
      let src = ctx.request.body;
      console.log('---删除通知----', src);
      // console.log('userInfo', userInfo);
      const id = await app.redis.get('10').get('socket_id_' + userInfo.id); // 获取 ID
      app.io.sockets.connected[id].emit('res', src);// 发送数据
      // ctx.body = {
      //   code: 200,
      //   status: 'success',
      //   msg: '通知成功',
      //   data: userMenu,
      // };
    } catch (err) {
      ctx.body = {
        code: 500,
        status: 'fail',
        msg: '通知异常',
        data: {},
      };
    }
  }
  async capture() {
    const { ctx, app } = this;
    try {
      let userInfo = { ...ctx.state.userInfo };
      let src = ctx.request.body;
      console.log('---通知爬取----', src);
      // console.log('userInfo', userInfo);
      const id = await app.redis.get('10').get('socket_id_' + userInfo.id); // 获取 ID
      app.io.sockets.connected[id].emit('res', src);// 发送数据
      // ctx.body = {
      //   code: 200,
      //   status: 'success',
      //   msg: '通知成功',
      //   data: userMenu,
      // };
    } catch (err) {
      ctx.body = {
        code: 500,
        status: 'fail',
        msg: '通知异常',
        data: {},
      };
    }
  }
}

module.exports = NotificationController;
