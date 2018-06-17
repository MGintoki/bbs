$(function () {
    if(sessionStorage.user){

        $(".home-login").hide();
        $(".home-userPane").show();

        alert(sessionStorage.user);

        var $user = JSON.parse(sessionStorage.user);
        var $userHead = "images/userHead/" + $user.userName + ".jpg";



        alert($user.userName);
        $("#navbar-userHead").attr("src", $userHead);
        alert($("#navbar-userHead").attr("src"));

    }else if(!sessionStorage.user){
        $(".home-login").show();
        $(".home-userPane").hide();
        $("#navbar-userHead").src("images/userHead/demo.jpg");

    }
    else {
        alert("error1")
    }
});