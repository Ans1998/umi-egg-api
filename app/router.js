'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
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
};
