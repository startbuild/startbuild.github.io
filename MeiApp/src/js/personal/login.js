$(function() {
	console.log("this is loading");
});
function init() {
	console.log("this is loading")
};
// 页面初始化
function init() {
	console.log("ddd");
	// 延迟300ms
	FastClick.attach(document.body);

	// 返回上页
	$("#btnBackHome").click(function() {
		window.history.back();
	});

	$("#btnBackHome").click(function() {

	});

	// 表单验证
	$("#loginForm").validate({
		rules:{
			txtLoginName:"required",
			txtPwd:{

				required:true,
				minlength:1
			}
		},
		errorPlacement:function(error,element) {
			alert(error.text());
		}
	});

	// 清除输入框
	$("#btnClear").clearText();

	// 显示密码
	$("#btnEye").showPwd();

	// 验证用户名&密码
	$("#txtLoginName,#txtPwd").bind("keyup",function() {
		var name=$("#txtLoginName").val();
		var pwd=$("#txtPwd").val();
		if(name!=""&&pwd!="") {
			$("#btnLogin").addClass("active").attr("disabled",false);
		} else {
			$("#btnLogin").removeClass("active").attr("disabled",true);
		}
	});

	// 登录按钮
	$("#btnLogin").click(function() {
		loginClick();
	});	
}

// 登录
var loginClick = function(){
    if($("#loginForm").valid()){
        var name = $("#txtLoginName").val();
        var pwd = $("#txtPwd").val();
        var param = {
            phone : name,
            password : pwd
        };
    }
};

// 显示切换
function showX(obj){
    $(obj).siblings(".ico-x").removeClass("hide");
    $(obj).siblings(".ico-eyebig").removeClass("hide");
    if($(obj).val()==""){
        $(obj).siblings(".ico-x").addClass("hide");
        $(obj).siblings(".ico-eyebig").addClass("hide");
    }
}