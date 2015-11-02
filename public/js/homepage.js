$(function() {
	// 获取点击的类别
	var $navA = $(".nav2-1 a");
	// 为点击的新闻类绑定点击事件
	$navA.click(function(e) {
		$clickValue = $(this).attr("value");
		$(".welcome").hide();
		// 点击后的导航栏效果
		// sessionStorage.setItem("welcome","$(\".welcome\").hide();");
		// sessionStorage.setItem("clickValue","$(this).attr(\"value\");");
		var $hoverNav = $navA.each(function(index, element) {
			var $allValue = $(element).attr("value");
			if ($allValue == $clickValue) {
				$(element).addClass('click-nav-a');
			} else {
				$(element).removeClass('click-nav-a');
			}
		});
		var $tablePictureContent = $(".content-right .table-picture-content");
		var $tableContent = $(".content-right .table-content");
		var $deleteContent = $(".content-right .delete-content");
		var $deletePictureContent = $(".content-right .delete-picture-content");
		var $formOne = $(".form-one");
		var $formTwo = $(".form-two");
		var $formThree = $(".form-three");
		var $formFour = $(".form-four");
		var $formFive = $(".form-five");
		// 点击后默认显示数据库所有的新闻内容表格
		function showTable() {
			if ($clickValue == "picture") {
				$tablePictureContent.show();
				$tableContent.hide();
				$formTwo.hide();
				$formOne.hide();
				$formThree.hide();
				$formFour.hide();
				$formFive.hide();
				$(".table-picture-content tbody *").remove();
				$.get('/database', {
					name: $clickValue
				}, function(data) {
					/*optional stuff to do after success */
					$.each(data, function(index, element) {
						box = $("<tr></tr>").appendTo($(".table-picture-content tbody"));
						tdId = $("<td></td>").text(element.news_id).appendTo(box);
						tdTitle = $("<td></td>").text(element.news_title).appendTo(box);
						tdImg = $("<td></td>").text(element.news_img).appendTo(box);
						tdUpdate = $("<td></td>").appendTo(box);
						updateMessage = $("<a href=\"#\" class = \"change\">修改</a>").attr("value", element.news_id).appendTo(tdUpdate);
					})
				});
			} else {
				$tablePictureContent.hide();
				$tableContent.show();
				$formOne.hide();
				$formTwo.hide();
				$formThree.hide();
				$formFour.hide();
				$formFive.hide();
				$(".table-content tbody *").remove();
				$.get('/database', {
					name: $clickValue
				}, function(data) {
					/*optional stuff to do after success */
					$.each(data, function(index, element) {
						box = $("<tr></tr>").appendTo($(".table-content tbody"));
						tdId = $("<td></td>").text(element.news_id).appendTo(box);
						tdTitle = $("<td></td>").text(element.news_title).appendTo(box);
						tdImg = $("<td></td>").text(element.news_img).appendTo(box);
						tdContent = $("<td></td>").text(element.news_content).appendTo(box);
						tdTime = $("<td></td>").text(element.add_times).appendTo(box);
						tdSource = $("<td></td>").text(element.news_source).appendTo(box);
						tdUpdate = $("<td></td>").appendTo(box);
						updateMessage = $("<a href=\"#\" class = \"change\">修改</a>").attr("value", element.news_id).appendTo(tdUpdate);
					})
				});
			}
		}
		showTable();
		// 点击增，删，改之后的页面显示效果
		$(".button-sort a").unbind("click").bind("click", function(event) {
			event.stopPropagation();
			$aValue = $(this).attr("value");
			// 点击了导入
			if ($aValue == "insert") {
				if ($clickValue == "picture") {
					$formOne.hide();
					$formTwo.show();
					$tablePictureContent.hide();
					$(".form-two .news-title").val("");
					$(".form-two .news-picture").val("");
				} else {
					$formOne.show();
					$formTwo.hide();
					$tableContent.hide();
					$(".form-one .news-title").val("");
					$(".form-one .news-picture").val("");
					$(".form-one .news-content").val("");
					$(".form-one .news-source").val("");
				}
				// 点击了删除
			} else if ($aValue == "delete") {
				$('[name=select\\[\\]]:checkbox').prop('checked', false); //先把数组里面的东西清空,否则会出现问题
				$formThree.show();
				$tablePictureContent.hide();
				$tableContent.hide();
				if ($clickValue == "picture") {
					$deleteContent.hide();
					$deletePictureContent.show();
					$(".delete-picture-content tbody *").remove();
					$.get('/database', {
						name: $clickValue
					}, function(data) {
						/*optional stuff to do after success */
						$.each(data, function(index, element) {
							box = $("<tr></tr>").appendTo($(".delete-picture-content tbody"));
							tdSelect = $("<td></td>").appendTo(box);
							deleteSelect = $("<input type=\"checkbox\" id=\"news-id\" name=\"select[]\">").attr("value", element.news_id).appendTo(tdSelect);
							tdId = $("<td></td>").text(element.news_id).appendTo(box);
							tdTitle = $("<td></td>").text(element.news_title).appendTo(box);
							tdImg = $("<td></td>").text(element.news_img).appendTo(box);
						})
					});
				} else {
					$deleteContent.show();
					$deletePictureContent.hide();
					$(".delete-content tbody *").remove();
					$.get('/database', {
						name: $clickValue
					}, function(data) {
						/*optional stuff to do after success */
						$.each(data, function(index, element) {
							box = $("<tr></tr>").appendTo($(".delete-content tbody"));
							tdSelect = $("<td></td>").appendTo(box);
							deleteSelect = $("<input type=\"checkbox\" id=\"news-id\" name=\"select[]\">").attr("value", element.news_id).appendTo(tdSelect);
							tdId = $("<td></td>").text(element.news_id).appendTo(box);
							tdTitle = $("<td></td>").text(element.news_title).appendTo(box);
							tdImg = $("<td></td>").text(element.news_img).appendTo(box);
							tdContent = $("<td></td>").text(element.news_content).appendTo(box);
							tdTime = $("<td></td>").text(element.add_times).appendTo(box);
							tdSource = $("<td></td>").text(element.news_source).appendTo(box);
						})
					});
				}
			}
			return false;
		});
		//点击了修改
		$(".content-right").unbind("click").on('click', '.change', function(event) {
			// event.stopPropagation();
			// event.preventDefault();
			var $indexValue = $(this).attr("value");
			$(".news-id").attr("value", $indexValue);
			if ($clickValue == "picture") {
				$formFour.hide();
				$formFive.show();
				$tablePictureContent.hide();
				$.post('/updateDate', {
					'news_id': $indexValue
				}, function(data) {
					/*optional stuff to do after success */
					$(".news-title").val(data[0].news_title);
					$(".news-picture").val(data[0].news_img);
					// console.log(data);
				});
			} else {
				$formFour.show();
				$formFive.hide();
				$tableContent.hide();
				$.post('/updateDate', {
					'news_id': $indexValue
				}, function(data) {
					/*optional stuff to do after success */
					$(".news-title").val(data[0].news_title);
					$(".news-picture").val(data[0].news_img);
					$(".news-content").val(data[0].news_content);
					$(".news-source").val(data[0].news_source);
				});
			}
			return false;
		});

		//利用ajax对表格进行删除
		$("#delete-message").unbind("click").bind("click", function(event) {
			// event.stopPropagation();
			event.preventDefault();
			var array = [];
			$('[name=select\\[\\]]:checked').each(function(index, el) {
				array.push($(this).val());
			});
			var $arrString = array.toString();
			$.ajax({
				url: '/changeData',
				type: 'POST',
				data: {
					'operation': $("#delete-message").val(),
					'name': $arrString
				},
				success: function(date) {
					alert("删除数据成功");
					showTable();
				},
				error: function() {
					alert("操作失败");
				}
			});
			return false;
		});
		//利用ajax对表格进行插入
		//插入其他类别
		$(".insert-message").unbind("click").bind("click", function(event) {
			// event.stopPropagation();
			event.preventDefault();
			$.ajax({
				url: '/changeData',
				type: 'POST',
				data: {
					'operation': $(".insert-message").val(),
					'news_sort': $clickValue,
					'news_title': $(".form-one .news-title").val(),
					'news_image': $(".form-one .news-picture").val(),
					'news_content': $(".form-one .news-content").val(),
					'news_source': $(".form-one .news-source").val()
				},
				success: function(date) {
					alert(date);
					showTable();
				},
				error: function() {
					alert("操作失败");
				}
			});
			return false;
		});
		//插入图片类别
		$(".insert-message-picture").unbind("click").bind("click", function(event) {
			// event.stopPropagation();
			event.preventDefault();
			console.log($(".insert-message").val());
			$.ajax({
				url: '/changeData',
				type: 'POST',
				data: {
					'operation': $(".insert-message").val(),
					'news_sort': $clickValue,
					'news_title': $(".form-two .news-title").val(),
					'news_image': $(".form-two .news-picture").val()
				},
				success: function(date) {
					alert(date);
					showTable();
				},
				error: function() {
					alert("操作失败");
				}
			});
			return false;
		});
		//利用ajax对表格进行修改
		//修改其他类别
		$(".update-message").unbind("click").bind("click", function(event) {
			// event.stopPropagation();
			event.preventDefault();
			$.ajax({
				url: '/changeData',
				type: 'POST',
				data: {
					'operation': $(".update-message").val(),
					'news_sort': $clickValue,
					'news_id': $(".form-four .news-id").val(),
					'news_title': $(".form-four .news-title").val(),
					'news_image': $(".form-four .news-picture").val(),
					'news_content': $(".form-four .news-content").val(),
					'news_source': $(".form-four .news-source").val()
				},
				success: function(date) {
					alert(date);
					showTable();
				},
				error: function() {
					alert("操作失败");
				}
			});
			return false;
		});
		//修改图片类别
		$(".update-message-picture").unbind("click").bind("click", function(event) {
			// event.stopPropagation();
			event.preventDefault();
			$.ajax({
				url: '/changeData',
				type: 'POST',
				data: {
					'operation': $(".update-message").val(),
					'news_sort': $clickValue,
					'news_id': $(".form-five .news-id").val(),
					'news_title': $(".form-five .news-title").val(),
					'news_image': $(".form-five .news-picture").val()
				},
				success: function(date) {
					alert(date);
					showTable();
				},
				error: function() {
					alert("操作失败");
				}
			});
			return false;
		});
		$(".sort-content").attr("value", $clickValue);
		return false;
	});
	$(".select-all").click(function(e) {
		$('[name=select\\[\\]]:checkbox').prop('checked', true);
		return false;
	});
	$(".select-none").click(function(e) {
		$('[name=select\\[\\]]:checkbox').prop('checked', false);
		return false;
	});
	$(".select-back").click(function(e) {
		$('[name=select\\[\\]]:checkbox').each(function(index, el) {
			this.checked = !this.checked;
		});
		return false;
	});
	// var b = sessionStorage.getItem("welcome");
	// eval(b);
});