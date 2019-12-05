'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  // 登录
  router.post('/api/login', controller.login.index.login);
  router.post('/api/logOut', controller.login.index.logOut);
  // 用户
  router.post('/api/user/info', controller.user.index.userInfo);
  router.post('/api/user/menu/info', controller.user.index.userMenuInfo);
  router.post('/api/user/query', controller.user.query.index);
  router.post('/api/user/add', controller.user.add.index);
  router.post('/api/user/editor', controller.user.editor.index);
  router.post('/api/user/delete', controller.user.delete.index);
  router.post('/api/user/set/auth/add', controller.user.setAuth.index.add);
  router.post('/api/user/set/auth/editor', controller.user.setAuth.index.editor);
  // 菜单
  router.post('/api/menu/query', controller.menu.query.index);
  router.post('/api/menu/add', controller.menu.add.index);
  router.post('/api/menu/editor', controller.menu.editor.index);
  router.post('/api/menu/delete', controller.menu.delete.index);
  // 角色
  router.post('/api/role/query', controller.role.query.index);
  router.post('/api/role/add', controller.role.add.index);
  router.post('/api/role/editor', controller.role.editor.index);
  router.post('/api/role/delete', controller.role.delete.index);
  router.post('/api/role/config/auth/query', controller.role.configAuth.query.index);
  router.post('/api/role/config/auth', controller.role.configAuth.index.index);
  // 爬虫
  router.post('/api/weibo/capture', controller.reptile.index.capture);
  router.post('/api/weibo/query/record', controller.reptile.index.queryRecord);
  router.post('/api/weibo/delete/record', controller.reptile.index.deleteRecord);
  // csv文件
  router.post('/api/weibo/csv/list', controller.reptile.index.queryCsvFile);
  router.post('/api/weibo/csv/look', controller.reptile.index.queryLookCsvFile);
  router.post('/api/weibo/csv/delete', controller.reptile.index.deleteCsvFile);
  router.post('/api/weibo/csv/pushStorage', controller.reptile.index.pushStorage);
  // 通知
  router.post('/api/notification/pushStorage', controller.notification.index.pushStorage);
  router.post('/api/notification/deleteCsv', controller.notification.index.deleteCsv);
  router.post('/api/notification/capture', controller.notification.index.capture);
  // socket
  io.route('/', io.controller.chat.ping);
  // router.post('/api/socket/test', controller.test.index.send);
  // io.of('/').route('chat', io.controller.chat.ping);
  // app.io.route('/api/socket/chat', app.io.controller.chat.ping);
  // app.io.route('chat', app.io.controller.chat.ping);
};
