'use strict';
const Service = require('egg').Service;

class MenuQueryService extends Service {
  // 查询菜单
  async index() {
    const { ctx } = this;
    let userInfo = { ...ctx.state.userInfo };
    let result = null;
    if (userInfo.id === 1 && userInfo.name === 'admin') {
      result = await this.app.mysql.select('react_menu_info');
      return JSON.stringify(result);
    }
    result = await this.app.mysql.query('select * from react_user_role userRole \n' +
      'left join \n' +
      'react_menu_role menuRole \n' +
      'on userRole.role_id = menuRole.role_id\n' +
      'left join\n' +
      'react_menu_info menuInfo\n' +
      'on menuRole.menu_id = menuInfo.id where userRole.user_id = ?', [ userInfo.id ]);
    return JSON.stringify(result);
  }
}
module.exports = MenuQueryService;
