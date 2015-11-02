$(function() {
	var $submitButton = $(".controls .bottom");
	//点击登录提交表格
	$submitButton.click(function(e) {
		e.preventDefault();
		$.post('/login_message', {
			user_name: $("#input-user").val(),
			user_password: $("#input-Password").val()
		}, function(data) {
			/*optional stuff to do after success */
			if (data == "yes") {
				location.href = '/homepage';
			} else if (data == "name") {
				$(".name-error").text("× 用户不存在");
				$(".password-error").text("");
				$("#input-user").val("").focus();
				$("#input-Password").val("")
			} else if (data == "password") {
				$(".password-error").text("× 密码错误");
				$(".name-error").text("");
				$("#input-Password").val("").focus();
			}
		});
		return false;
	});

});