$(function () {
    if(sessionStorage.user){
        $(".home-login").hide();
        $(".home-userPane").show();
        // alert(sessionStorage.user);
        var $user = JSON.parse(sessionStorage.user);


        //这里取用户头像url不准确
        var $userHead = "images/userHead/" + $user.userName + ".jpg";

        $("#navbar-userHead").attr("src", $userHead);


    }else if(!sessionStorage.user){
        $(".home-login").show();
        $(".home-userPane").hide();
        $("#navbar-userHead").src("images/userHead/demo.jpg");

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
