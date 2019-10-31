'use strict';
const Service = require('egg').Service;

class UserQueryService extends Service {
  async index() {
    const { ctx } = this;
    let userInfo = { ...ctx.state.userInfo };
    let result = [];
    if (userInfo.id === 1 && userInfo.name === 'root') {
      result = await this.app.mysql.query('select \n' +
        'userInfo.id as u_id,userInfo.name as u_name, userInfo.password as u_password,userInfo.status as u_status,\n' +
        'userInfo.update_time as u_update_time,\n' +
        'userRole.user_id, userRole.role_id, userRole.id as r_id,\n' +
        'roleInfo.name as r_name, roleInfo.status as r_status\n' +
        'from react_user_info userInfo\n' +
        'left join \n' +
        'react_user_role userRole \n' +
        'on userInfo.id = userRole.user_id\n' +
        'left join\n' +
        'react_role_info roleInfo\n' +
        'on userRole.role_id = roleInfo.id where userInfo.id != 1 AND userInfo.name != "root"');
    }
    return result;
  }
  async userRole(obj) {
    // const { ctx } = this;
    // let userInfo = { ...ctx.state.userInfo };
    let result = await this.app.mysql.select('react_user_role', {
      where: { ...obj },
    });
    return result;
  }
  async menu() {
    const { ctx } = this;
    let userInfo = { ...ctx.state.userInfo };
    let result = null;
    if (userInfo.id === 1 && userInfo.name === 'admin') {
      result = await this.app.mysql.select('react_menu_info');
      return result;
    }
    result = await this.app.mysql.query('select * from react_user_role userRole \n' +
      'left join \n' +
      'react_menu_role menuRole \n' +
      'on userRole.role_id = menuRole.role_id\n' +
      'left join\n' +
      'react_menu_info menuInfo\n' +
      'on menuRole.menu_id = menuInfo.id where userRole.user_id = ?', [ userInfo.id ]);
    return result;
  }
}
module.exports = UserQueryService;
