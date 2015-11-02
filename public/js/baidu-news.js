$(function() {
	// 默认显示推荐的新闻栏
	$.get('/database', {
		name: $(".recomend").attr("value")
	}, function(data) {
		$.each(data, function(index, element) {
			box = $("<div></div>").addClass("news-content").appendTo($(".content"));
			image = $("<div></div>").addClass("content-picture").appendTo(box);
			image_picture = $("<img>").attr("src", element.news_img).appendTo(image);
			image_content = $("<div></div>").addClass("content-title").appendTo(box);
			image_title = $("<p></p>").text(element.news_title).appendTo(image_content);
			content_message = $("<div></div>").addClass("content-message").appendTo(box);
			time = $("<span></span>").addClass("time").text(element.add_times).appendTo(content_message);
			source = $("<span></span>").addClass("source").text(element.news_source).appendTo(content_message);
		});
	}).error(function() {
		alert('文件加载失败');
	});
	// 获取各个新闻的类别
	var $tableSpan = $("table div span");
	$tableSpan.eq(0).addClass('nav-border');
	// 为新闻类别绑定点击事件
	$tableSpan.click(function(e) {
		var $clickValue = $(this).attr("value");
		$tableSpan.each(function(index, element) {
			var $allValue = $(element).attr("value");
			if ($allValue == $clickValue) {
				$(element).addClass('nav-border');
			} else {
				$(element).removeClass('nav-border');
			}
		});
		$('.content *').remove();
		$.get('/database', {
			name: $clickValue
		}, function(data) {
			if ($clickValue == 'picture') {
				$.each(data, function(index, element) {
					box = $("<div></div>").addClass("news-content").appendTo($(".content"));
					image = $("<div></div>").addClass("big-picture").appendTo(box);
					image_picture = $("<img>").attr("src", element.news_img).appendTo(image);
					image_content = $("<div></div>").addClass("picture-title").appendTo(box);
					image_title = $("<p></p>").text(element.news_title).appendTo(image_content);
				});
			} else {
				$.each(data, function(index, element) {
					box = $("<div></div>").addClass("news-content").appendTo($(".content"));
					image = $("<div></div>").addClass("content-picture").appendTo(box);
					image_picture = $("<img>").attr("src", element.news_img).appendTo(image);
					image_content = $("<div></div>").addClass("content-title").appendTo(box);
					image_title = $("<p></p>").text(element.news_title).appendTo(image_content);
					content_message = $("<div></div>").addClass("content-message").appendTo(box);
					time = $("<span></span>").addClass("time").text(element.add_times).appendTo(content_message);
					source = $("<span></span>").addClass("source").text(element.news_source).appendTo(content_message);
				});
			}
		}).error(function() {
			alert('文件加载失败');
		});
	});
});