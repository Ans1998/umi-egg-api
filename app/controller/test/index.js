'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async send() {
    const { ctx, app } = this;
    const id = await app.redis.get('pid'); // 获取 ID
    console.log('TestController---', id);
    app.io.sockets.connected[id].emit('res', 'send From app');// 发送数据
    ctx.body = 'ok';
  }
}

module.exports = TestController;
