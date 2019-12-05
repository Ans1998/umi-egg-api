'use strict';
const Controller = require('egg').Controller;
const pytohnUrl = 'http://localhost:5000';
class ReptileController extends Controller {
  async pythonCapture(src) {
    const { ctx, app } = this;
    try {
      let userInfo = { ...ctx.state.userInfo };
      let token = await app.redis.get('0').get(userInfo.id);
      const { data } = await ctx.curl(pytohnUrl + '/weibo/capture', {
        dataType: 'json',
        timeout: 3000,
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token
        },
        data: {
          url: src.url,
          scope: JSON.stringify(src.scope),
          userIdPrefix: src.userIdPrefix,
        },
      });
      console.log('pythonCapture---data---', data)
    } catch (err) {
      console.log(err);
    }
  }
  async capture() {
    const { ctx } = this;
    let src = ctx.request.body;
    try {
      console.log(src);
      if (typeof src.scope === 'string') {
        src.scope = JSON.parse(src.scope)
      }
      let res = null;
      // 定义创建接口的请求参数规则
      let createRule = {
        url: 'string',
        scope: 'object',
        userIdPrefix: 'string',
      };
      // 使用参数校验
      ctx.validate(createRule, src);
      // 使用python爬取数据
      this.pythonCapture(src);
      // 添加爬取记录
      return this.addRecord(src);
    } catch (err) {
      // console.log(err);
      if (err.errors) {
        ctx.body = {
          code: 403,
          status: 'fail',
          msg: '创建爬虫记录失败',
          data: err,
          test: ctx.request.body,
        };
      }
    }
  }
  async addRecord(src) {
    const { ctx } = this;
    try {
      let res = await ctx.service.reptile.index.add(src);
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '添加爬虫记录成功',
        data: res,
      };
    } catch (e) {
      ctx.body = {
        code: 403,
        status: 'fail',
        msg: '添加爬虫记录失败',
        data: e,
        test: ctx.request.body,
      };
    }
  }
  async queryRecord() {
    const { ctx } = this;
    try {
      let res = await ctx.service.reptile.index.query();
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '查询爬虫记录成功',
        data: res,
      };
    } catch (e) {
      ctx.body = {
        code: 403,
        status: 'fail',
        msg: '查询爬虫记录失败',
        data: e,
        test: ctx.request.body,
      };
    }
  }
  async deleteRecord() {
    const { ctx } = this;
    try {
      let src = ctx.request.body;
      // 定义创建接口的请求参数规则
      let createRule = {
        id: 'string',
      };
      // 使用参数校验
      ctx.validate(createRule, src);
      let res = await ctx.service.reptile.index.delete(src);
      ctx.body = {
        code: 200,
        status: 'success',
        msg: '删除爬虫记录成功',
        data: res,
      };
    } catch (e) {
      ctx.body = {
        code: 403,
        status: 'fail',
        msg: '删除爬虫记录失败',
        data: e,
        test: ctx.request.body,
      };
    }
  }
  // csv文件
  async queryCsvFile() {
    const { ctx } = this;
    try {
      const { data } = await ctx.curl(pytohnUrl + '/weibo/file/list', {
        dataType: 'json',
        timeout: 3000,
        method: 'POST',
        data: {},
      });
      // console.log('pythonCapture---data---', data);
      // console.log(data);
      ctx.body = data;
    } catch (err) {
      // console.log(err);
      if (err.errors) {
        ctx.body = {
          code: 403,
          status: 'fail',
          msg: '读取csv文件列表失败',
          data: err,
          test: ctx.request.body,
        };
      }
    }
  }
  async queryLookCsvFile() {
    const { ctx } = this;
    try {
      let src = ctx.request.body;
      // 定义创建接口的请求参数规则
      let createRule = {
        catalogueName: 'string',
        fileName: 'string',
      };
      // 使用参数校验
      ctx.validate(createRule, src);
      const { data } = await ctx.curl(pytohnUrl + '/weibo/look/file', {
        dataType: 'json',
        timeout: 3000,
        method: 'POST',
        data: {
          cataloguePath: src.catalogueName,
          filePath: src.fileName,
        },
      });
      // console.log('pythonCapture---data---', data);
      // console.log(data);
      ctx.body = data;
    } catch (err) {
      // console.log(err);
      if (err.errors) {
        ctx.body = {
          code: 403,
          status: 'fail',
          msg: '读取csv文件列表失败',
          data: err,
          test: ctx.request.body,
        };
      }
    }
  }
  async deleteCsvFile() {
    const { ctx, app } = this;
    try {
      let src = ctx.request.body;
      // 定义创建接口的请求参数规则
      let createRule = {
        form: 'array',
      };
      // 使用参数校验
      ctx.validate(createRule, src);
      // console.log(src);
      let userInfo = { ...ctx.state.userInfo };
      let token = await app.redis.get('0').get(userInfo.id);
      const { data } = await ctx.curl(pytohnUrl + '/weibo/delete/file', {
        dataType: 'json',
        timeout: 3000,
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token
        },
        data: {
          form: JSON.stringify(src.form),
        },
      });
      // console.log('pythonCapture---data---', data);
      // console.log(data);
      ctx.body = data;
    } catch (err) {
      // console.log(err);
      if (err.errors) {
        ctx.body = {
          code: 403,
          status: 'fail',
          msg: '读取csv文件列表失败',
          data: err,
          test: ctx.request.body,
        };
      }
    }
  }
  async pushStorage() {
    const { ctx, app } = this;
    try {
      let src = ctx.request.body;
      // 定义创建接口的请求参数规则
      let createRule = {
        form: 'array',
      };
      // 使用参数校验
      ctx.validate(createRule, src);
      // console.log(src.form);
      // console.log(JSON.stringify(src));
      let userInfo = { ...ctx.state.userInfo };
      let token = await app.redis.get('0').get(userInfo.id);
      const { data } = await ctx.curl(pytohnUrl + '/weibo/file/pushStorage', {
        dataType: 'json',
        timeout: 3000,
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token
        },
        data: {
          form: JSON.stringify(src.form),
        },
      });
      // console.log('pythonCapture---data---', data);
      // console.log(data);
      ctx.body = data;
    } catch (err) {
      // console.log(err);
      if (err.errors) {
        ctx.body = {
          code: 403,
          status: 'fail',
          msg: '进库失败',
          data: err,
          test: ctx.request.body,
        };
      }
    }
  }
}

module.exports = ReptileController;
