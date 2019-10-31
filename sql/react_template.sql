/*
 Navicat Premium Data Transfer

 Source Server         : xampp
 Source Server Type    : MySQL
 Source Server Version : 100138
 Source Host           : localhost:3306
 Source Schema         : react_template

 Target Server Type    : MySQL
 Target Server Version : 100138
 File Encoding         : 65001

 Date: 31/10/2019 16:31:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for react_menu_info
-- ----------------------------
DROP TABLE IF EXISTS `react_menu_info`;
CREATE TABLE `react_menu_info`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `icon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` int(11) NOT NULL COMMENT '1开启0关闭',
  `p_id` int(11) NOT NULL,
  `update_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `create_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of react_menu_info
-- ----------------------------
INSERT INTO `react_menu_info` VALUES (1, '首页', '/', 'home', 1, 0, '2019-10-31 11:35:28.614', '2019-10-31 11:35:28.614');
INSERT INTO `react_menu_info` VALUES (2, '菜单管理', '/menu', 'menu', 1, 0, '2019-10-31 15:49:47.487', '2019-10-31 11:36:36.367');
INSERT INTO `react_menu_info` VALUES (3, '菜单列表', '/menu/list', 'home', 1, 2, '2019-10-31 11:36:53.772', '2019-10-31 11:36:53.772');
INSERT INTO `react_menu_info` VALUES (4, '权限管理', '/auth', 'home', 1, 0, '2019-10-31 11:37:25.061', '2019-10-31 11:37:25.061');
INSERT INTO `react_menu_info` VALUES (5, '角色列表', '/auth/role/list', 'home', 1, 4, '2019-10-31 11:37:52.716', '2019-10-31 11:37:52.716');
INSERT INTO `react_menu_info` VALUES (6, '用户列表', '/auth/user/list', 'home', 1, 4, '2019-10-31 14:08:44.551', '2019-10-31 14:08:44.551');
INSERT INTO `react_menu_info` VALUES (7, '表单管理', '/form', 'home', 1, 0, '2019-10-31 14:10:02.918', '2019-10-31 14:10:02.918');
INSERT INTO `react_menu_info` VALUES (8, '基础表单', '/form/basics-form', 'home', 1, 7, '2019-10-31 14:10:26.583', '2019-10-31 14:10:26.583');
INSERT INTO `react_menu_info` VALUES (9, '高级表单', '/form/advanced-form', 'home', 1, 7, '2019-10-31 14:10:46.301', '2019-10-31 14:10:46.301');
INSERT INTO `react_menu_info` VALUES (10, '列表管理', '/list', 'home', 1, 0, '2019-10-31 14:11:13.622', '2019-10-31 14:11:13.622');
INSERT INTO `react_menu_info` VALUES (11, '基础列表', '/list/basics-list', 'home', 1, 10, '2019-10-31 14:11:26.485', '2019-10-31 14:11:26.485');
INSERT INTO `react_menu_info` VALUES (12, '高级列表', '/list/advanced-list', 'home', 1, 10, '2019-10-31 14:11:46.721', '2019-10-31 14:11:46.721');
INSERT INTO `react_menu_info` VALUES (13, '详情管理', '/details', 'home', 1, 0, '2019-10-31 14:12:09.406', '2019-10-31 14:12:09.406');
INSERT INTO `react_menu_info` VALUES (14, '基础详情', '/details/basics-details', 'home', 1, 13, '2019-10-31 14:12:23.043', '2019-10-31 14:12:23.043');
INSERT INTO `react_menu_info` VALUES (15, '高级详情', '/details/advanced-details', 'home', 0, 13, '2019-10-31 15:55:26.511', '2019-10-31 14:12:42.554');

-- ----------------------------
-- Table structure for react_menu_role
-- ----------------------------
DROP TABLE IF EXISTS `react_menu_role`;
CREATE TABLE `react_menu_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL COMMENT '角色id',
  `menu_id` int(11) NOT NULL COMMENT '菜单id',
  `add_id` int(10) NOT NULL COMMENT '增权限(1有权限则无)',
  `delete_id` int(10) NOT NULL COMMENT '删权限(1有权限则无)',
  `editor_id` int(10) NOT NULL COMMENT '改权限(1有权限则无)',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of react_menu_role
-- ----------------------------
INSERT INTO `react_menu_role` VALUES (1, 1, 1, 0, 0, 0);
INSERT INTO `react_menu_role` VALUES (2, 1, 7, 0, 0, 0);
INSERT INTO `react_menu_role` VALUES (3, 1, 8, 0, 0, 0);
INSERT INTO `react_menu_role` VALUES (4, 1, 9, 0, 0, 0);
INSERT INTO `react_menu_role` VALUES (5, 1, 11, 0, 0, 0);
INSERT INTO `react_menu_role` VALUES (6, 1, 10, 0, 0, 0);
INSERT INTO `react_menu_role` VALUES (7, 1, 12, 0, 0, 0);
INSERT INTO `react_menu_role` VALUES (8, 1, 13, 0, 0, 0);
INSERT INTO `react_menu_role` VALUES (9, 1, 14, 0, 0, 0);
INSERT INTO `react_menu_role` VALUES (10, 1, 15, 0, 0, 0);

-- ----------------------------
-- Table structure for react_role_info
-- ----------------------------
DROP TABLE IF EXISTS `react_role_info`;
CREATE TABLE `react_role_info`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `describe` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int(11) NOT NULL COMMENT '1开启0关闭',
  `update_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `create_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of react_role_info
-- ----------------------------
INSERT INTO `react_role_info` VALUES (1, '管理员', '就是拥有root的尚方宝剑', 1, '2019-10-31 11:33:13.698', '2019-10-31 11:33:13.698');

-- ----------------------------
-- Table structure for react_user_info
-- ----------------------------
DROP TABLE IF EXISTS `react_user_info`;
CREATE TABLE `react_user_info`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名称',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户密码',
  `status` int(11) NOT NULL COMMENT '1开启0关闭',
  `creact_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `update_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of react_user_info
-- ----------------------------
INSERT INTO `react_user_info` VALUES (1, 'root', '123456', 1, NULL, '2019-10-30 16:09:23.744');
INSERT INTO `react_user_info` VALUES (2, 'An', '123456', 1, NULL, '2019-10-31 16:00:22.471');
INSERT INTO `react_user_info` VALUES (4, 'admin', '123456', 1, '2019-10-31 11:12:08.041', '2019-10-31 11:12:08.041');

-- ----------------------------
-- Table structure for react_user_role
-- ----------------------------
DROP TABLE IF EXISTS `react_user_role`;
CREATE TABLE `react_user_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of react_user_role
-- ----------------------------
INSERT INTO `react_user_role` VALUES (1, 1, 4);

SET FOREIGN_KEY_CHECKS = 1;
