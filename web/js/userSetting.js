$(function () {
    var $user = JSON.parse(sessionStorage.user);
    var img = getUserHeadImg($user.userName);
    var headImg = "upload/images/" + img;
    $("#userSetting-img").attr("src", headImg)
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