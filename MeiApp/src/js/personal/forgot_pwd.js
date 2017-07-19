function  init(){
    FastClick.attach(document.body);

    // 清空输入框
    $("#btnClear").clearText();

    // 发送校验码
    $("#btnSendCode").click(function() {
        nextCode();
    });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

    $("#txtPhone").bind("keyup",function(){
        showX(this);
        var txt=$(this).val();
        if(txt.length>10){
            tel();
        }
    });
}

// 发送校验码
function nextCode() {
    var phone=$("#txtPhone").val();
    var data={
        phone: phone
    };
    getPhoneCode(data,   true, function (result) {
        if(result.code==0) {
                var title = "输入验证码";
                var url = "forgot_pwdcode.html?tel="+phone+"&codeKey="+result.data.codeKey;
                var new_url = OperationURL.getUrlParent(window.location.href) + url;
                OperationURL.loadURL(webviewInterface.winType.normal, webviewInterface.mode.push, webviewInterface.orientation.portrait, title, new_url);
        }else{
            // $.happytoAlert(result.msg);
        }
    });
}

var showX=function(obj){
    $(obj).siblings(".ico-x").removeClass("hide");
    if($(obj).val()==""){
        $(obj).siblings(".ico-x").addClass("hide");
    }
};

// 检查手机号是否存在
var tel=function(){
    var phone=$("#txtPhone").val();
    if(!$.isValidate(7,phone)){
        $("#btnSendCode").removeClass("active").addClass("login-color");
        $("#btnSendCode").attr("disabled",true);
        // $.happytoAlert("请输入正确的手机号");
        return;
    }
    var data={
        phone:phone
    };
    getCheckPhone(data, true, function (result) {
        if(result.code==0) {
            if(result.data.flag==1){
                $("#btnSendCode").removeClass("login-color").addClass("active");
                $("#btnSendCode").attr("disabled",false);
            }else{
                $("#btnSendCode").removeClass("active").addClass("login-color");
                // $.happytoAlert("不存在此用户");
            }
        }else{
            // $.happytoAlert(result.msg);
        }
    });

};
