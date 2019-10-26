'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  // 参数校验
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  // 跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};
