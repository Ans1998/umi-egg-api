'use strict';
const Controller = require('egg').Controller;

class RoleConfigAuthController extends Controller {
  arrLength(queryArr, src) {
    const { ctx } = this;
    let res = null;
    queryArr.forEach(async (item) => {
      // console.log('判断src.menu_arr里面有没有queryArr', item, src.menu_arr.indexOf(item));
      if (src.menu_arr.indexOf(item) === -1) {
        let obj = {
          role_id: src.role_id,
          menu_id: item,
          // add_id: 0,
          // delete_id: 0,
          // editor_id: 0
        };
        // console.log(obj);
        res = await ctx.service.role.configAuth.index.delete(obj);
      }
    });
    src.menu_arr.forEach(async (item) => {
      // console.log('判断queryArr里面有没有src.menu_arr', item, queryArr.indexOf(item));
      if (queryArr.indexOf(item) === -1) {
        let obj = {
          role_id: src.role_id,
          menu_id: item,
          // add_id: 0,
          // delete_id: 0,
          // editor_id: 0
        };
        // console.log(obj);
        res = await ctx.service.role.configAuth.index.add(obj);
      }
    });
    return res;
  }
  // 配置权限
  async index() {
    const { ctx } = this;
    try {
      let src = ctx.request.body;
      let res = null;
      // 定义创建接口的请求参数规则
      let createRule = {
        role_id: 'string',
        menu_arr: 'string',
        // menu_id: 'string',
        // add_id: 'string',
        // delete_id: 'string',
        // editor_id: 'string',
      };
      // 使用参数校验
      ctx.validate(createRule, src);
      src.menu_arr = JSON.parse(src.menu_arr);
      let queryList = await ctx.service.role.configAuth.query.index(src);
      queryList = JSON.parse(JSON.stringify(queryList));
      // console.log(queryList);
      if (queryList.length < 1) {
        src.menu_arr.forEach( async (item) => {
          let obj = {
            role_id: src.role_id,
            menu_id: item,
            // add_id: 0,
            // delete_id: 0,
            // editor_id: 0
          };
          // console.log(obj);
          res = await ctx.service.role.configAuth.index.add(obj);
        });
      } else {
        let queryArr = [];
        queryList.forEach((item) => {
          queryArr.push(item.menu_id.toString());
        });
        // console.log(queryArr);
        // console.log(src.menu_arr);
        res = this.arrLength(queryArr, src);
      }
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '配置权限成功',
        data: res,
      };
    } catch (e) {
      ctx.body = {
        code: 403,
        status: 'fail',
        msg: '配置权限失败',
        data: e,
        test: ctx.request.body,
      };
    }
  }
}

module.exports = RoleConfigAuthController;
