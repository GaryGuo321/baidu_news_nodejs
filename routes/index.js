var express = require('express');
var router = express.Router();
var orm = require('orm');


/* GET home page. */
//baidu_news.jade
router.get('/', function(req, res, next) {
	res.render('baidu_news');
});
//login.jade
router.get('/login', function(req, res, next) {
	res.render('login');
});
//homepage.jade
router.get('/homepage', function(req, res, next) {
	res.render('homepage');
});
//ajax显示百度新闻内容和homepage显示表格内容
router.get('/database', function(req, res, next) {
	orm.connect("mysql://root:123456@127.0.0.1/baidu_news", function(err, db) {
		if (err) throw err;
		// 定义数据模型(操作的数据表名为news)
		var news = db.define("news", {
			news_id: {
				type: 'serial',
				key: true
			},
			news_title: String,
			news_img: String,
			news_content: String,
			news_source: String,
			add_times: String,
			news_sort: String
		});
		// 查询数据
		news.find({
			news_sort: req.query.name
		}, function(err, news) {
			if (err) throw err;
			res.send(news); //将数据返回给ajax程序
		});
	});
});
//点击更新时默认数据显示
router.post('/updateDate', function(req, res, next) {
	orm.connect("mysql://root:123456@127.0.0.1/baidu_news", function(err, db) {
		if (err) throw err;
		// 定义数据模型(操作的数据表名为news)
		var news = db.define("news", {
			news_id: {
				type: 'serial',
				key: true
			},
			news_title: String,
			news_img: String,
			news_content: String,
			news_source: String,
			add_times: String,
			news_sort: String
		});
		// 查询数据
		news.find({
			news_id: req.body.news_id
		}, function(err, news) {
			if (err) throw err;
			res.send(news); //将数据返回给ajax程序
		});
	});
});
//ajax验证登录信息
router.post('/login_message', function(req, res, next) {
	orm.connect("mysql://root:123456@127.0.0.1/baidu_news", function(err, db) {
		if (err) throw err;
		// 定义数据模型(操作的数据表名为user_message)
		var user_message = db.define("user_message", {
			user_id: {
				type: 'serial',
				key: true
			},
			user_name: String,
			user_password: String
		});
		// 查询数据
		user_message.find({}, function(err, user_message) {
			if (err) throw err;
			for (var i = 0; i < user_message.length; i++) {
				if (req.body.user_name === user_message[i].user_name && req.body.user_password === user_message[i].user_password) {
					res.send("yes");
				} else {
					if (req.body.user_name !== user_message[i].user_name) {
						res.send("name");
					} else {
						res.send("password");
					}
				}
			}
		});
	});
});
//ajax 数据库数据增删改
router.post('/changeData', function(req, res, next) {
	orm.connect("mysql://root:123456@127.0.0.1/baidu_news", function(err, db) {
		if (err) throw err;
		// 定义数据模型(操作的数据表名为news)
		var news = db.define("news", {
			news_id: {
				type: 'serial',
				key: true
			},
			news_title: String,
			news_img: String,
			news_content: String,
			news_source: String,
			add_times: String,
			news_sort: String
		});
		//插入数据
		if (req.body.operation == 'insert') {
			var addDate = new Date();
			var insert_times = addDate.toLocaleDateString();
			if (req.body.news_sort == 'picture') {
				news.create({
					news_title: req.body.news_title,
					news_img: req.body.news_image,
					news_sort: req.body.news_sort,
					add_times: insert_times,
					news_content: '',
					news_source: '' //orm插入数据需要不能有任何一个为null
				}, function(err, news) {
					if (err) {
						res.send('插入数据失败！');
					} else {
						res.send('插入数据成功！');
					}
				});
			} else {
				news.create({
					news_title: req.body.news_title,
					news_img: req.body.news_image,
					news_sort: req.body.news_sort,
					add_times: insert_times,
					news_content: req.body.news_content,
					news_source: req.body.news_source //orm插入数据需要不能有任何一个为null
				}, function(err, news) {
					if (err) {
						res.send('插入数据失败！');
					} else {
						res.send('插入数据成功！');
					}
				});
			}
		}
		//更新数据
		if (req.body.operation == 'update') {
			var addDate = new Date();
			var insert_times = addDate.toLocaleDateString();
			if (req.body.news_sort == 'picture') {
				news.find({
					news_id: req.body.news_id
				}, function(err, news) {
					news[0].news_title = req.body.news_title;
					news[0].news_img = req.body.news_image;
					news[0].news_sort = req.body.news_sort;
					news[0].add_times = insert_times;
					news[0].news_content = '';
					news[0].news_source = '';
					news[0].save(function(err) {
						if (err) {
							res.send("更新数据失败！");
						} else {
							res.send("更新数据成功！");
						}
					})
				})
			} else {
				news.find({
					news_id: req.body.news_id
				}, function(err, news) {
					news[0].news_title = req.body.news_title;
					news[0].news_img = req.body.news_image;
					news[0].news_sort = req.body.news_sort;
					news[0].add_times = insert_times;
					news[0].news_content = req.body.news_content;
					news[0].news_source = req.body.news_source;
					news[0].save(function(err) {
						if (err) {
							res.send("更新数据失败！");
						} else {
							res.send("更新数据成功！");
						}
					})
				})
			}
		}
		//删除数据
		if (req.body.operation == 'delete') {
			var id_num = req.body.name;
			var arr = id_num.split(',');
			var arr_length = arr.length;
			var delete_count = 1;
			for (var t = 0; t < arr_length; t++) {
				news.find({
					news_id: arr[t]
				}).remove(function(err) {
					if (err) throw err;
					if (delete_count == arr_length) res.send("删除数据成功！");
					else delete_count++; //防止重复发送
					// if(t == arr_length) res.send("删除数据成功！");
					// 不能这么写，闭包的问题，t永远会等于arr_length
				})
			}
		}
	});
});

module.exports = router;