$(function () {
    var $user = JSON.parse(sessionStorage.user);
    var img = getUserHeadImg($user.userName);
    var headImg = "/" + img;
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
function modifyInfo(){
    var user = JSON.parse(sessionStorage.user);
    // alert($("#sex option:selected").val());
    $.ajax({
        url:"http://127.0.0.1:8080/u/modify/message",
        type:"post",
        data:{
            userName:user.userName,
            message:$("#userMessage").val(),
            sex:$("#sex option:selected").val()
        },
        success:function(data){
            // alert(data.message);
            window.location.reload();
        }
    })
}