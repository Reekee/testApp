/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : place

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-10-29 01:32:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `checkname`
-- ----------------------------
DROP TABLE IF EXISTS `checkname`;
CREATE TABLE `checkname` (
  `checkname_id` int(11) NOT NULL,
  `student_id` varchar(255) DEFAULT '',
  PRIMARY KEY (`checkname_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of checkname
-- ----------------------------
INSERT INTO `checkname` VALUES ('1', '111');
INSERT INTO `checkname` VALUES ('2', '222255677');
INSERT INTO `checkname` VALUES ('3', 'pppp');

-- ----------------------------
-- Table structure for `gender`
-- ----------------------------
DROP TABLE IF EXISTS `gender`;
CREATE TABLE `gender` (
  `gender_id` int(11) NOT NULL,
  `gender_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gender_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gender
-- ----------------------------
INSERT INTO `gender` VALUES ('1', 'ชาย');
INSERT INTO `gender` VALUES ('2', 'หญิง');

-- ----------------------------
-- Table structure for `status`
-- ----------------------------
DROP TABLE IF EXISTS `status`;
CREATE TABLE `status` (
  `status_id` int(11) NOT NULL,
  `status_name` varchar(255) DEFAULT '',
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of status
-- ----------------------------
INSERT INTO `status` VALUES ('1', 'โสด');
INSERT INTO `status` VALUES ('2', 'สมรส');

-- ----------------------------
-- Table structure for `type`
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `type_id` int(11) NOT NULL,
  `type_name` varchar(255) DEFAULT '',
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES ('1', 'แอดมิน');
INSERT INTO `type` VALUES ('2', 'คนทั่วไป');
INSERT INTO `type` VALUES ('3', 'aaa');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_lname` varchar(255) NOT NULL,
  `gender_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'สมชาย', 'สมดี', '1', '1', 'somchai', '1234', '1', '1.jpg');
INSERT INTO `user` VALUES ('2', 'สมหญิง', 'สมใจ', '2', '2', 'somying', '2345', '2', '2.jpg');
INSERT INTO `user` VALUES ('3', 'aaaaa', 'er', '2', '2', 'aaa', 'aaa', '2', '3.jpg');
INSERT INTO `user` VALUES ('4', 'abcd', 'aaaa', '1', '1', 'abcd', 'aaaa', '3', '4.jpg');
INSERT INTO `user` VALUES ('5', 'ff', 'gg', '2', '1', 'ty', 'ty', '2', '');
INSERT INTO `user` VALUES ('6', 'ff', 'gg', '2', '1', 'ty', 'ty', '2', '');
INSERT INTO `user` VALUES ('7', 'ff', 'gg', '2', '1', 'ty', 'ty', '2', '');
INSERT INTO `user` VALUES ('8', 'ff', 'gg', '2', '1', 'ty', 'ty', '2', '');
