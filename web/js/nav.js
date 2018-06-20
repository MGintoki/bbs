/**
 * 存放导航栏js以及一些全局的js
 */
$(function () {
    if(sessionStorage.user){
        $(".home-login").hide();
        $(".home-userPane").show();
         // alert(sessionStorage.user);

        var $user = JSON.parse(sessionStorage.user);


var $userName = $user.userName;
        //这里取用户头像url不准确
        var userHead = getUserHeadImg($userName);
        var src = "upload/images/";
        src += userHead;
        $("#navbar-userHead").attr("src", src);

        $("#nav-userName").text($userName);




    }else if(!sessionStorage.user){
        $(".home-login").show();
        $(".home-userPane").hide();
        $("#navbar-userHead").attr("src", "images/userHead/demo.jpg");

    }
    else {
        alert("error1")
    }
});
$(function () {
    $("#loginOut").bind("click", function () {
        sessionStorage.removeItem("user");
        window.location.href="index.html";
    });

});
/**
 * 为全局的所有名字添加一个点击事件
 * 跳转到个人主页并且传入一个参数visitName
 */
$(function () {
    $(".visitName").click(function () {
        // var visitName =
        window.location.href = URL;
    })
});

$(function () {
   if(sessionStorage.user){
       var $user = JSON.parse(sessionStorage.user);
       if($user.authority == 1){
           $(".btn-sm").show()
       }else {
           $(".btn-sm").hide();
       }
   }
    $(".btn-sm").hide();
});

function getUserHeadImg(userName){
    var headImg="";
    $.ajax({
        url:"http://127.0.0.1:8080/headImg",
        type:"get",
        data:{
            userName:userName
        },
        async:false,
        success:function(data){
            headImg = data.data;
        }
    });
    return headImg;
}