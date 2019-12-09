// 在每一个客户端连接或者退出时发生作用，故而我们通常在这一步进行授权认证，对认证失败的客户端做出相应的处理
'use strict';
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken'); // 引入 jsonwebtoken
module.exports = () => {
  return async (ctx, next) => {
    const { app, socket } = ctx;
    // console.log(socket);
    try {
      // 获取客户端ID
      const id = socket.id; // 获取 Socket ID
      const query = socket.handshake.query;
      if ('Authorization' in  query) {
        if (!query.Authorization) return false;
        let authToken = query.Authorization;
        authToken = authToken.substring(7);
        const res = verifyToken(authToken); // 解密获取的Token
        await app.redis.get('10').set('socket_id_' + res.userInfo.id, id); // 设置 Socket ID
        let obj = {
          code: '200',
          status: 'success',
          msg: '连接socket成功',
          data: { pid: id },
        };
        ctx.socket.emit('res', obj);
        await next();
      }
    } catch (e) {
      ctx.logger.error(e);
      // const nsp = app.io.of('/');
      // const id = socket.id; // 获取 Socket ID
      // console.log(e);
      // // 调用 adapter 方法踢出用户，客户端触发 disconnect 事件
      // nsp.adapter.remoteDisconnect(id, true, err => {
      //   ctx.logger.error(err);
      // });
    }
  };
};
// 解密，验证
function verifyToken(token) {
  const cert = fs.readFileSync(path.join(__dirname, '../../public/rsa_public_key.pem')); // 公钥，看后面生成方法
  let res = '';
  try {
    const result = jwt.verify(token, cert, { algorithms: [ 'RS256' ] }) || {};
    const { exp } = result,
      current = Math.floor(Date.now() / 1000);
    if (current <= exp) res = result.data || {};
  } catch (e) {
    console.log(e);
  }
  return res;
}
