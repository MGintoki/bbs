$(function () {
    getAllArticle();
   getTopArticle();
   getStarArticle();



});
window.onload = function () {
    var imgs = document.getElementsByClassName("author-head");
    for (var i = 0; i < imgs.length; i++) {
        var name = imgs[i].getAttribute("title");
        getHeadImg(name, imgs[i]);
    }
};
function getHeadImg(userName, obj) {

    $.ajax({
        url: "http://127.0.0.1:8080/userInfo",
        type: "post",
        dataType:"json",
        data:{
            'userName':userName
        },
        success:function (data) {
            var headImg = getUserHeadImg(userName);
            console.log(data);
            var clazz = "." + userName;
            var headImgSrc =  headImg;
            obj.setAttribute("src", headImgSrc);
            // $(id).attr('src', headImgSrc);



        }
    });


}
function usernameHandle(){
   $(".card-username").click(function () {
       var $visitName = $(this).text();
       sessionStorage.setItem("visitName", $visitName);
       window.location.href="profile.html";
   })
}
function articleHandle(){
    $(".article-title").click(function () {
        var $visitArticle = $(this).text();

        sessionStorage.setItem("visitArticle", $visitArticle);
        window.location.href="card.html";
    })
}
$(document).ready(function () {
    $("#writeCard-btn").click(function () {
        window.location.href="writeCard.html";
    })
});
$(function () {
    $(".nav-link1").click(function () {
        $("#allCard-panel").html("");
        ($.ajax({

            url: "http://127.0.0.1:8080/article",
            type: "get",
            dataType:"json",
            success:function (data) {
                $.each(data.data, function() {
                    // alert("循环");
                    createAllCard(this);
                    // alert("create success")

                });
                if(sessionStorage.user){
                    var $user = JSON.parse(sessionStorage.user);
                    if($user.authority == 1){
                        $(".master-btn").show();
                    }else {
                        $(".master-btn").hide();
                    }
                }


            }
        }))

    });
    $(".nav-link").click(function () {



        $("#allCard-panel").html("");
        var $sort = $(this).attr("title");
        ($.ajax({
            url: "http://127.0.0.1:8080/article",
            type: "get",
            dataType:"json",
            success:function (data) {

                $.each(data.data, function() {

                    // alert("循环");
                    if(this.sort == $sort){

                        var $card = createAllCard(this);


                    }

                    // alert("create success")

                });
                if(sessionStorage.user){
                    var $user = JSON.parse(sessionStorage.user);
                    if($user.authority == 1){
                        $(".master-btn").show();
                    }else {
                        $(".master-btn").hide();
                    }
                }


            }
        }))

    })
});
function getAllArticle() {
    ($.ajax({

        url: "http://127.0.0.1:8080/article",
        type: "get",
        dataType:"json",
        success:function (data) {
            $.each(data.data, function(index, value) {
                // alert("循环");

                createAllCard(this);
                // alert("create success")

            getHeadImg(this.author, this.articleId);

                usernameHandle();
                articleHandle();

            });
            if(sessionStorage.user){
                var $user = JSON.parse(sessionStorage.user);
                if($user.authority == 1){
                    $(".master-btn").show();
                }else {
                    $(".master-btn").hide();
                }
            }


        }
    }))
}
function getTopArticle() {
    ($.ajax({

        url: "http://127.0.0.1:8080/admin/topArticle",
        type: "get",
        dataType:"json",
        success:function (data) {
            $.each(data.data, function() {
                // alert("循环");
                createTopArticle(this);
                // alert("create success")


            });
            usernameHandle();
            articleHandle();
        }
    }))
}
function getStarArticle() {
    ($.ajax({

        url: "http://127.0.0.1:8080/admin/starArticle",
        type: "get",
        dataType:"json",
        success:function (data) {
            $.each(data.data, function() {
                // alert("循环");
                createStarArticle(this);
                // alert("create success")
                usernameHandle();
                articleHandle();
            });

        }
    }))
}


function createTopArticle(card) {
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





    var $card = $("<div id=\"\" class=\"well well-sm\">\n" +
        "             \n" +
        "                <div class=\"row\">\n" +
        "                 \n" +
        "                  <div class=\"col-sm-2 clearfix\">\n" +
        "                    <img title=\"" + author + "\" id=\""+ articleId +"\" class=\"author-head headPic img-thumbnail content-card-head\" src=\""+ img +"\" alt=\"\">\n" +
        "                  </div>\n" +
        "                \n" +
        "                  <div class=\"col-sm-8 clearfix\" card-mainContent>\n" +
        "                    <div class=\"row\">\n" +
        "                      \n" +
        "\n" +
        "                      <a href=\"./profile.html?visit="+ author+"\" class=\"link-userName card-username col-sm-2\">\n" +
        author +
        "                      </a>\n" +
        "                    \n" +
        "                      <div class=\"col-sm-6 aaaa\">\n" +
        "                        <a href=\""+ "./card.html?articleId="+ articleId+"\" class=\"article-title\">" + articleTitle + "</a>\n" +
        "                      </div>\n" +
        "                      <div class=\"col-sm-2\">\n" +
        // "                          <div id='admin-btn-group' class=\"btn-group\">\n" +
        // "                              <button type=\"button\" class=\"btn-sm btn btn-info master-btn dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        // "                                 管理<span class=\"caret\"></span>\n" +
        // "                              </button>\n" +
        // "                              <ul class=\"dropdown-menu\">\n" +
        // "                                <li><a href=\"#\">删除</a></li>\n" +
        // "                                <li><a href=\"#\">置顶</a></li>\n" +
        // "                                <li><a href=\"#\">加精</a></li>\n" +
        // "                              </ul>\n" +
        // "                            </div>\n" +
        "                      </div>\n" +
        "                      <div class=\"col-sm-2\">\n" +
        "                       <img class=\"reply\" src=\"images/reply.png\" alt=\"\">\n" + replyNum +
        "                      </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"row\">\n" +
        "                  \n" +
        "                      <div class=\"col-sm-2\">\n" +
        "                        <div class=\"label label-info content-label \">" + sort +"</div>\n" +
        "                      </div>\n" +
        "                     \n" +
        "                      <div class=\"col-sm-6\">\n" +
        postTime +
        "                      </div>\n" +
        "                      <div class=\"recent-reply col-sm-4\">\n" +
        // "                        最近回复于\n" +
        // "                        <span class='link-userName card-username'>"+ lastReplyAuthor +"</span>\n" +
        "                      </div>\n" +
        "                    </div>\n" +
        "                  </div>\n" +
        "                \n" +
        "\n" +
        "                </div>\n" +
        "              </div>");
        $("#home-topArticle").append($card);

}
function createStarArticle(card) {
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
        "        <img class='author-head star-head' title=\"" + author + "\" src=\""+ img+"\" alt=\"\">\n" +
        "        </div>\n" +
        "<div class=\"col-sm-4\">" +
        "<a href=\"./profile.html?visit="+ author+"\" class=\"link-userName card-username col-sm-2\">\n" +
        author +
        "                      </a>" +
        "</div>" +
        "         <a href=\""+ "./card.html?articleId="+ articleId+"\" class=\"article-title aaaa\">" + articleTitle + "</a>\n" +
        "\n" +
        "        </div>\n" +
        "        </div>");
    $("#home-starArticle").append($card);


}
function createAllCard(card) {

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





    var $card = $("<div id=\"\" class=\"well well-sm\">\n" +
        "             \n" +
        "                <div class=\"row\">\n" +
        "                 \n" +
        "                  <div class=\"col-sm-2 clearfix\">\n" +
        "                    <img title=\"" + author + "\" id=\""+ articleId +"\" class=\"author-head headPic img-thumbnail content-card-head\" src=\""+ img +"\" alt=\"\">\n" +
        "                  </div>\n" +
        "                \n" +
        "                  <div class=\"col-sm-8 clearfix\" card-mainContent>\n" +
        "                    <div class=\"row\">\n" +
        "                      \n" +
        "\n" +
        "                      <a href=\"./profile.html?visit="+ author+"\" class=\"link-userName card-username col-sm-2\">\n" +
        author +
        "                      </a>\n" +
        "                    \n" +
        "                      <div class=\"col-sm-6\">\n" +
        "                        <a href=\""+ "./card.html?articleId="+ articleId+"\" class=\"article-title aaaa\">" + articleTitle + "</a>\n" +
        "                      </div>\n" +
        "                      <div class=\"col-sm-2\">\n" +
        "                          <div class=\"btn-group\">\n" +
        "                              <button type=\"button\" class=\"btn-sm btn btn-info master-btn dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        "                                 管理<span class=\"caret\"></span>\n" +
        "                              </button>\n" +
        "                              <ul class=\"dropdown-menu\">\n" +
        "                                <li><a onclick='deleteArticle("+ articleId +")' href=\"#\">删除</a></li>\n" +
        "                                <li><a onclick='topArticle("+ articleId +")' href=\"#\">置顶</a></li>\n" +
        "                                <li><a onclick='starArticle("+ articleId +")' href=\"#\">加精</a></li>\n" +
        "                              </ul>\n" +
        "                            </div>\n" +
        "                      </div>\n" +
        "                      <div class=\"col-sm-2\">\n" +
        "                       <img class=\"reply\" src=\"images/reply.png\" alt=\"\">\n" + replyNum +
        "                      </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"row\">\n" +
        "                  \n" +
        "                      <div class=\"col-sm-2\">\n" +
        "                        <div class=\"label label-info content-label \">" + sort +"</div>\n" +
        "                      </div>\n" +
        "                     \n" +
        "                      <div class=\"col-sm-5\">\n" +
        postTime +
        "                      </div>\n" +
        "                      <div class=\"recent-reply col-sm-5\">\n" +
        "                        最近回复于\n" +
        "                        <span class='link-userName card-username'>"+ lastReplyAuthor +"</span>\n" +
        "                      </div>\n" +
        "                    </div>\n" +
        "                  </div>\n" +
        "                \n" +
        "\n" +
        "                </div>\n" +
        "              </div>");

    $("#allCard-panel").append($card);




}
function createCard() {

    var articleId = card.articleId;
    var articleTitle = card.articleTitle;
    var articleBody = card.articleBody;
    var author = card.author;
    var sort = card.sort;
    var label = card.label;
    var postTime = card.postTime;
    var lastReplyAuthor = card.lastReplyAuthor;
    var replyNum = card.replyNum;



    var $card = $("<div class=\"well well-sm\">" +
        "<div class = \"row\">\n" +
        "<div class=\"col-sm-2 \">\n" +
        "<img class=\"img-thumbnail content-card-head\" src=\"images/userHead/demo.png\" alt=\"\"></div>\n" +

        "<div class=\"col-sm-8  card-mainContent \">\n" +
        "<div class=\"row\">\n" +
        "<div class=\"card-username col-sm-2\">" + author + "</div>\n" +

        "<div class=\"col-sm-6\">\n" +
        "<h4 class=\"article-title\">" + articleTitle + "</h4>\n" +
        "<div class=\"col-sm-2\">\n" +
        "<div  class=\"btn-group\">\n" +
        "<button  type=\"button\" class=\"btn-sm btn btn-info master-btn dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        "管理" + "<span class=\"caret\"></span></button>\n" +

        "<ul class=\"dropdown-menu\">\n" +
        "<li><a href=\"#\">删除</a></li>\n" +
        "<li><a href=\"#\">置顶</a></li>\n" +
        "<li><a href=\"#\">加精</a></li>\n" +
        "</ul>" +
        "</div>" +
        "</div>\n" +
        "</div>\n" +

        "<div class=\"col-sm-2\"> \n" +
        "<img class=\"reply\" src=\"images/reply.png\">" +  replyNum +
        "</div>" +
        "</div>\n" +
        "<div class=\"row\">\n" +
        "<div class=\"col-sm-2\">\n" +
        "<div class=\"label label-info content-label \">" + label +  "</div>" +
        "</div>\n" +
        "<div class=\"col-sm-5\">\n"
        + postTime +
        "</div>\n" +
        "<div class=\"recent-reply col-sm-5\">\n" +
        "最近回复于" +
        "<span class='card-username'>" + lastReplyAuthor + "</span>" +
        "</div></div></div></div></div>\n");



    return $card;
}

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

function getButton() {
    // alert("getbutton");
    $($.ajax({
        url:"http://127.0.0.1:8080/article/pageNum",
        type:"get",

        success:function(data){
            var pageNum=data.data;
            for(var i=1;i<=pageNum;i++){

                var $btn = $("<button type=\"button\" title=\"\" class=\"homeChangeBtn btn btn-default\" onclick='changePage(" + i + ")'>第" + i+"页</button>");
                $("#changeBtn").append($btn);
            }

        }
    }));
}
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {return unescape(r[2]);
    }
    return null;}//根据用户名获取头像信息
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
            headImg = data.data;}
    });
    return headImg;
}
function topArticle(articleId) {

    var url = "http://127.0.0.1:8080/t/" + articleId +"/top";
    $.ajax({
        url:url,
        type:"post",

        async:false,
        success:function(data){
            alert("置顶成功");
            location.reload();
        }
    });

    return false;
}
function starArticle(articleId) {
    var url = "http://127.0.0.1:8080/t/" + articleId +"/star";
    $.ajax({
        url:url,
        type:"post",

        async:false,
        success:function(data){
            alert("加精成功");
            location.reload();
        }
    });
    return false;
}
function deleteArticle(articleId) {
    $.ajax({
        url:"http://127.0.0.1:8080/deleteArticle",
        type:"post",
        data:{
            articleId:articleId
        },
        async:false,
        success:function(data){
            alert("删除成功！")
            location.reload();
        }
    });
    return false;
}