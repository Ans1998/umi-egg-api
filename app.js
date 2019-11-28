module.exports = app => {
  // 开始前执行
  app.beforeStart(async () => {
    console.log('beforeStart');
  });
  // 准备好执行
  app.ready(async () => {
    // 举例，获取数据库图片域名，放到缓存，便于使用
    console.log('ready');
  });
  // 关闭前执行
  app.beforeClose(async () => {
    console.log('beforeClose')
  });
};
