'use strict';
const Controller = require('egg').Controller;

class MenuQueryController extends Controller {
  filterMenu(userMenu) {
    console.log(userMenu);
    userMenu.forEach((oneItem) => {
      if (oneItem.p_id === 0) {
        this.test(userMenu, oneItem)
      }
    })
  }
  test(userMenu, oneItem) {
    let arr = [];
    userMenu.forEach((twoItem, oneKey) => {
      arr[oneKey] = oneItem;
      if (oneItem.id === twoItem.p_id || oneItem.p_id === twoItem.p_id) {
        if ('child' in arr[oneKey]) {
          arr[oneKey].child.push(twoItem)
        } else {
          arr[oneKey].child = [];
          arr[oneKey].child.push(twoItem)
        }
      } else {
        // this.test(userMenu, twoItem)
      }
    });
    console.log(arr);
    return arr;
  }
  // 菜单信息
  async index() {
    const { ctx } = this;
    try {
      let userMenu = JSON.parse(await ctx.service.menu.query.index());
      if (!userMenu) {
        throw new Error('userMenu not found');
      }
      // let src = this.filterMenu(userMenu);
      // console.log(src);
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '查询菜单成功',
        data: userMenu,
      };
    } catch (err) {
      switch (err.message) {
        case 'userMenu not found':
          ctx.body = {
            code: 403,
            status: 'fail',
            msg: '查询菜单失败',
            data: {},
          };
          break;
        default:
          ctx.body = {
            code: 500,
            status: 'fail',
            msg: '获取数据异常',
            data: {},
          };
      }
    }
  }
}

module.exports = MenuQueryController;
