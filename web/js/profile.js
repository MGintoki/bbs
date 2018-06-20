$(function () {

    var visit = getQueryString("visit");

    if(visit){
        var user = getUser(visit);
        getProfile2(user);
        getCard(visit);
    }else {

        var $user = JSON.parse(sessionStorage.user);

        getProfile2($user);
        getCard($user.userName);
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

    // alert(user);
    var userName = user.userName;
    // alert(userName);
    var headImg = getUserHeadImg(userName);
    // alert(headImg);

    var regTime = user.registerTime;
    var message = user.message;
    var $profile = $(" <ul class=\"list-group\" id=\"porfile-group\">\n" +
        "                        <li class=\"list-group-item\"><img src=\"" + headImg + "\" class=\"img-circle\" id=\"profile-img\"\n" +
        "                                                         alt=\"userHead\" ></li>\n" +
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
function getCard(userName) {
    $.ajax({

        url: "http://127.0.0.1:8080/u/getAllArticle",
        type: "get",
        dataType:"json",
        data:{
            userName:userName
        },
        success:function (data) {
            $.each(data.data, function() {
                // alert("循环");
                createCard(this);
                // alert("create success")
                usernameHandle();
                articleHandle();
            });

        }
    })
}
function createCard(card) {



    var articleId = card.articleId;
    var articleTitle = card.articleTitle;
    var articleBody = card.articleBody;
    var author = card.author;
    var sort = card.sort;
    var img = getUserHeadImg(author);
    var label = card.label;
    var postTime = card.postTime;
    var lastReplyAuthor = card.lastReplyAuthor;
    var replyNum = card.replyNum;

    var $card = $("<div class=\"well\">\n" +
        "        <div class=\"row\">\n" +
        "        <div class=\"col-sm-2\">\n" +
        "        <img src=\""+ img +"\" title=\"" + author + "\" id=\""+ articleId +"\" class=\"author-head headPic img-thumbnail content-card-head\" >\n" +
        "        </div>\n" +
        "<div class=\"col-sm-4\">" +
        "<a href=\"./profile.html?visit="+ author+"\" class=\"link-userName card-username col-sm-2\">\n" +
        author +
        "                      </a>" +
        "</div>" +
        "<div class='col-sm-4'>" +
        "         <a href=\""+ "./card.html?articleId="+ articleId+"\" class=\"article-title\">" + articleTitle + "</a>\n" +
        "\n" +
        "</div>" +
        "                      <div class=\"col-sm-2\">\n" +
        "                       <img class=\"reply\" src=\"images/reply.png\" alt=\"\">\n" + replyNum +
        "                      </div>\n" +
        "        </div>\n" +
        "        </div>");
    $("#profile-card").append($card);}
function getUser(userName){
    var user ;
    $.ajax({
        url:"http://127.0.0.1:8080/u/",
        type:"get",
        data:{
            userName:userName
        },
        async:false,
        success:function(data){
            user = data.data;
        }
    });
    return user;
}