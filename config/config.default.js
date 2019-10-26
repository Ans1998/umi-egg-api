/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1571021775317_9463';
  // 安全配置
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // 中间件配置
  config.middleware = [ 'jwt' ];
  // jwt配置
  config.jwt = {
    enable: true,
    ignore: [ '/api/login' ], // 不认证API路由
  };
  // 日志配置
  config.logger = {
    dir: './log',
  };
  // 数据库配置
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '',
      // 数据库名
      database: 'react_template',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // redis配置
  config.redis = {
    client: {
      host: '127.0.0.1', // Redis host
      password: '',
      port: 6379, // Redis port
      db: 0, // 设置指定db库
    },
  };
  // 跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
