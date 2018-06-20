$(function () {
    var visit = getQueryString("visit");
    if(visit){
        getProfile(visit);
    }else {

        var $user = JSON.parse(sessionStorage.user);

        getProfile2($user);
    }
});

//根据参数名获取url传参
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
function getProfile(userName) {
    $.ajax({
        url:"http://127.0.0.1:8080/t/info",
        type:"get",
        data:{
            articleId:getQueryString("articleId")
        },
        dataType:"json",
        success:function(data){
            $("#articleTitle").text(data.data.articleTitle);
            $("#postTime").text(data.data.postTime);
            $("#label").text(data.data.sort);
            $("#articleBody").text(data.data.articleBody);
        }
    })
}

function getProfile2(user) {


    var userName = user.userName;
    var headImg = getUserHeadImg(userName);

    var regTime = user.registerTime;
    var message = user.message;
    var $profile = $(" <ul class=\"list-group\" id=\"porfile-group\">\n" +
        "                        <li class=\"list-group-item\"><img class=\"img-circle\" id=\"profile-img\" src=\"upload/images/"+ headImg+"\"\n" +
        "                                                         alt=\"userHead\" class=\"img-responsive\"></li>\n" +
        "                        <li class=\"list-group-item\"><h3 id=\"profile-userName\" class=\"username\">"+ userName+"</h3></li>\n" +
        "                        <li class=\"list-group-item\"><h6 id=\"profile-regTime\" class=\"regTime\">"+ regTime+"</h6></li>\n" +
        "                        <li class=\"list-group-item\"><p id=\"profile-message\">"+ message+"</li>\n" +
        "\n" +
        "                    </ul>");

    $("#profile-body").append($profile);
};

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
function getUser(userName){
    var user="";
    $.ajax({
        url:"http://127.0.0.1:8080/u/",
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