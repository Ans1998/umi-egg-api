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
  // 菜单
  router.post('/api/menu/query', controller.menu.query.index);
  router.post('/api/menu/add', controller.menu.add.index);
  router.post('/api/menu/editor', controller.menu.editor.index);
  router.post('/api/menu/delete', controller.menu.delete.index);
  router.post('/api/menu/child/add', controller.menu.childMenu.add.index);
  // 角色
  router.post('/api/role/query', controller.role.query.index);
  router.post('/api/role/add', controller.role.add.index);
  router.post('/api/role/editor', controller.role.editor.index);
  router.post('/api/role/delete', controller.role.delete.index);
  router.post('/api/role/config/auth', controller.role.configAuth.index);
};
