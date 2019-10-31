'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  // 查询用户信息
  async findUser(uid) {
    let result = await this.app.mysql.get('react_user_info', { id: uid });
    return result;
  }
  async findMenuUser(uid) {
    const { ctx } = this;
    let userInfo = { ...ctx.state.userInfo };
    let result = [];
    if (userInfo.id === 1 && userInfo.name === 'root') {
      result = await this.app.mysql.select('react_menu_info');
      return result;
    }
    result = await this.app.mysql.query('select * from react_user_role userRole \n' +
      'left join \n' +
      'react_menu_role menuRole \n' +
      'on userRole.role_id = menuRole.role_id\n' +
      'left join\n' +
      'react_menu_info menuInfo\n' +
      'on menuRole.menu_id = menuInfo.id where userRole.user_id = ? AND menuInfo.status = 1', [ uid ]);
    return result;
  }
}
module.exports = UserService;
