-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- 主机: 127.0.0.1
-- 生成日期: 2015 �?10 �?10 �?16:03
-- 服务器版本: 5.6.11
-- PHP 版本: 5.5.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `baidu_news`
--
CREATE DATABASE IF NOT EXISTS `baidu_news` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `baidu_news`;

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `news_id` int(11) NOT NULL AUTO_INCREMENT,
  `news_title` varchar(30) NOT NULL,
  `news_img` text NOT NULL,
  `news_content` text NOT NULL,
  `news_source` varchar(10) NOT NULL,
  `add_times` varchar(20) NOT NULL,
  `news_sort` varchar(20) NOT NULL,
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=68 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`news_id`, `news_title`, `news_img`, `news_content`, `news_source`, `add_times`, `news_sort`) VALUES
(1, '互联网也难抵大势所“曲”', 'http://t10.baidu.com/it/u=http://c.hiphotos.baidu.com/news/crop%3D53%2C1%2C504%2C303%3Bw%3D638/sign=dd6a8a8533fae6cd18fbf12132863c08/810a19d8bc3eb13579bbdc09a01ea8d3fd1f4407.jpg&fm=36', '由于上述几点都是传统显示器难以企及的，因此毫不夸张的说，曲面技术堪称显示器的自我颠覆之路。', '新浪热点', '2015-09-23', 'common'),
(2, '美国广播偶像首度自曝，如何做火新媒体', 'http://t10.baidu.com/it/u=http://c.hiphotos.baidu.com/news/crop%3D0%2C2%2C768%2C461%3Bw%3D638/sign=fb7b7e4c30d3d539d572558307b7c562/48540923dd54564ea0c9ba8bb5de9c82d0584fd7.jpg&fm=36', '看美国广播偶像，如何打造全球最棒的新媒体公司之一Gimlet，为你呈现真实媒体人背后的故事。', '腾讯网', '2015-09-23', 'common'),
(3, '《第三种爱情》：有情有肉停不下来', 'http://t10.baidu.com/it/u=http://a.hiphotos.baidu.com/news/w%3D638/sign=f2bf959db8096b6381195d5334328733/5243fbf2b21193134887ad0263380cd790238db8.jpg&fm=36', '什么才是第三种爱情，正是影片要和观众探讨的。', '凤凰热点', '2015-09-23', 'common'),
(4, '[独家]李涛:亚洲最快“独角兽”的三个必杀技', 'http://t10.baidu.com/it/u=http://g.hiphotos.baidu.com/news/crop%3D0%2C43%2C549%2C330%3Bw%3D638/sign=6be49e78a951f3ded7fde324a9dedc2b/3bf33a87e950352a30ae73ba5543fbf2b3118bb1.jpg&fm=36', '这是APUS创始人李涛在9月18日的爆品大课上，最引发现场热度的问题。', '凤凰头条', '2015-09-23', 'common'),
(5, '黄晓明暗示婚礼捧花留给范爷:就怕她不敢接', 'http://t12.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/smccloud/2015/09/23/144296962857229207_620_1000.PNG&fm=36', '黄晓明暗示婚礼捧花留给范冰冰      【搜狐视频娱乐播报】搜狐娱乐讯 （千一/文 马森/图 远辉/...', '新浪娱乐', '2015-09-23', 'entertainment'),
(6, '曝赵丽颖加盟《极限》大电影', 'http://t11.baidu.com/it/u=http://img6.cache.netease.com/ent/2015/9/23/20150923124020ca2c6.jpg&fm=36', '有网友爆料赵丽颖已签约加盟，搭档极限六男成为该片唯一的女主角。', '网易娱乐', '2015-09-23', 'entertainment'),
(7, '黄子韬发声明反击SM起诉：身体精神受害', 'http://t11.baidu.com/it/u=http://r3.sinaimg.cn/10230/2015/0920/8c/c/33552360/500x748.jpg&fm=36', '声称“已对黄子韬及其音乐专辑制作方提起了诉讼，且北京法院已于9月18日正式立案”。', '网易娱乐', '2015-10-09', 'entertainment'),
(8, '伊能静谈与哈林婚姻:很痛苦', 'http://t10.baidu.com/it/u=http://img4.cache.netease.com/ent/2015/9/23/20150923114922f1973.jpg&fm=36', '伊能静却被曝出在禅修课上，表达自己对前一段婚姻的不愉快。', '腾讯娱乐', '2015-10-08', 'entertainment'),
(9, '北京食药监局：哈尔滨红肠等多种食品不合格', 'http://t10.baidu.com/it/u=http://r3.sinaimg.cn/10230/2015/0923/94/5/31548589/auto.jpg&fm=36', '【[子路芝麻酱、聪明岛烤鱼片、夏乐明泡豇豆等不合格】北京市食药监局通报：子路芝麻酱、聪明岛烤鱼...', '腾讯网', '2015-10-09', 'localtion'),
(10, '分析：为何风等来了 超市O2O却病了？', 'http://t12.baidu.com/it/u=http://imgs.ebrun.com/resources/2015_09/2015_09_23/201509236731442985453812.jpg&fm=36', '由于先天不足，超市很难向O2O公开核心资源，没有深度联姻，超市O2O品牌难以长久，或许只有BA...', '新浪头条', '2015-10-09', 'localtion'),
(11, '6家门店5家关停 乙十六阵痛中转型大众餐饮', 'http://t11.baidu.com/it/u=http://pic.chinasspp.com/News/u/592514/image/201509/23125303_4440.jpg&fm=36', '目前除了乙十六地坛总店外，原有的另外5家门店已全部关停。', '网易头条', '2015-10-09', 'localtion'),
(12, '莫里斯正式与北京完成续约手续 5月达成协议', 'http://t11.baidu.com/it/u=http://gb.cri.cn/mmsource/images/2015/09/23/sb2015092300068.jpg&fm=36', '北京男篮与内线外援莫里斯正式完成了签约，双方签的是一份2+1的合同，最后一年是球队选项。', '腾讯网', '2015-10-09', 'localtion'),
(13, '难民带宠物狗逃亡500公里不抛弃', 'http://timg01.baidu-img.cn/timg?tc&size=b634_356&sec=0&quality=100&cut_x=0&cut_y=0&cut_h=356&cut_w=0&di=e5a30baa7fd30d27d0288fdb3dc35c58&src=http%3A%2F%2Ft12.baidu.com%2Fit%2Fu%3Dhttp%3A%2F%2Fimg1.gtimg.com%2Fnews%2Fpics%2Fhv1%2F17%2F214%2F1930%2F125552837.jpg%26fm%3D94', '', '', '2015-10-09', 'picture'),
(14, '郑州最贵洗车行邀请“比基尼”美女', 'http://timg01.baidu-img.cn/timg?tc&size=b842_474&sec=0&quality=100&cut_x=52&cut_y=0&cut_h=0&cut_w=842&di=67b19c37944c0be862d34044ad08d621&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fnews%2Fcrop%253D0%252C137%252C948%252C474%2Fsign%3Dd2a81648d7c8a786aa65104e5a39e50c%2F203fb80e7bec54e7c166acacbf389b504ec26afe.jpg', '', '', '2015-10-09', 'picture'),
(15, '金正恩参观日用品展喜笑颜开', 'http://timg01.baidu-img.cn/timg?tc&size=b707_398&sec=0&quality=100&cut_x=44&cut_y=0&cut_h=0&cut_w=707&di=aefbf1c1cbca91a6ef8a33c7f73c5e84&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fnews%2Fcrop%253D0%252C54%252C796%252C398%2Fsign%3Db0ec68d2332ac65c734a3c33c6c29e24%2Fdbb44aed2e738bd439770683a78b87d6277ff92a.jpg', '', '', '2015-10-09', 'picture'),
(16, '陈柏霖 还是那个痴情的大仁哥', 'http://timg01.baidu-img.cn/timg?tc&size=b683_384&sec=0&quality=100&cut_x=0&cut_y=301&cut_h=384&cut_w=0&di=c39a578c21c96a39cc39f4a5681e4716&src=http%3A%2F%2Ft10.baidu.com%2Fit%2Fu%3Dhttp%3A%2F%2Fimg4.cache.netease.com%2Fphoto%2F0026%2F2015-10-09%2FB5GC8KOI43AJ0026.jpg%26fm%3D94', '', '', '2015-10-09', 'picture'),
(17, '武汉高校为教学采购130颗钻石', 'http://t11.baidu.com/it/u=http://img1.cache.netease.com/catchpic/D/D2/D221F2366C71E5E25CD4097054E3E5A8.jpg&fm=36', '该校订购的一批钻石，本学期正式用于宝石材料工艺和珠宝鉴定专业教学，观察、触摸这些钻石，就是学生...', '网易要闻', '2015-10-09', 'recommend'),
(18, '杨振宁演讲 学生：最想见翁帆', 'http://t10.baidu.com/it/u=http://f.hiphotos.baidu.com/news/q%3D100/sign=c503a105053b5bb5b8d724fe06d2d523/4ec2d5628535e5dd0a26057170c6a7efce1b6212.jpg&fm=36', '发现原本能容纳200多人的报告厅挤满了上千名学生。', '网易要闻', '2015-10-09', 'recommend'),
(19, '安倍获莫迪祝福 回复时谢错人', 'http://t10.baidu.com/it/u=http://img1.cache.netease.com/catchpic/3/33/335B03DF821C09695278411759FE5BE4.jpg&fm=36', '由于输入莫迪的网名时中间空了一格，结果发给了一位与莫迪同名的毫不相识的人。', '网易要闻', '2015-10-09', 'recommend'),
(20, '天津爆炸现场启动市容恢复', 'http://t11.baidu.com/it/u=http://img3.cache.netease.com/3g/2015/9/23/20150923101922bddbf.jpg&fm=36', '滨海新区已启动事故区域周边环境市容清整恢复，尽快将事故区域周边的市容环境恢复原貌。', '网易要闻', '2015-10-09', 'recommend'),
(21, '湖北厨师2年创作200余件面塑', 'http://t12.baidu.com/it/u=http://img1.cache.netease.com/catchpic/C/CA/CAAD59B6A7A76B0D35E43210321C4367.jpg&fm=36', '谈起自己的梦想，艾民表示，希望通过自己的努力，影响更多身边的人，把面塑这门手艺继承发扬下去。', '新浪要闻', '2015-10-09', 'sociology'),
(22, '夫妻凌晨吵架妻子转身跳楼', 'http://t12.baidu.com/it/u=http://inews.gtimg.com/newsapp_ls/0/66604563_150120/0&fm=36', '万一自己和同事发现晚了，万一当时悬在7楼的女子没被抓牢……。', '网易头条', '2015-10-09', 'sociology'),
(23, '男子街头被骗 学骗术行骗被擒', 'http://t10.baidu.com/it/u=http://img3.cache.netease.com/cnews/2015/9/22/201509221818120736c.png&fm=36', '年轻男子刘某在街边玩猜瓜子被骗，讨教骗术后摆摊开始骗别人。', '百度新闻', '2015-10-09', 'sociology'),
(24, '男子持斧头杀妻 用棉被捂尸体', 'http://t11.baidu.com/it/u=http://img5.cache.netease.com/cnews/2015/9/23/2015092313212684fcb.png&fm=36', '哪有舌头不碰牙的，夫妻之间，为生活中一些琐碎事儿拌嘴很正常，比如孩子教育问题、老人养老问题等等。', '腾讯网', '2015-10-09', 'sociology');

-- --------------------------------------------------------

--
-- 表的结构 `user_message`
--

CREATE TABLE IF NOT EXISTS `user_message` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `user_message`
--

INSERT INTO `user_message` (`user_id`, `user_name`, `user_password`) VALUES
(1, 'admin', 'admin');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
