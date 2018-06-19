$(function () {
    getAllArticle();
   getTopArticle();
   getStarArticle();



});

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
            $.each(data.data, function() {
                // alert("循环");
                createAllCard(this);
                // alert("create success")
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
        $("#home-topArticle").append($card);

}
function createStarArticle(card) {
    var articleId = card.articleId;
    var articleTitle = card.articleTitle;
    var articleBody = card.articleBody;
    var author = card.author;
    var sort = card.sort;
    var label = card.label;
    var postTime = card.postTime;
    var lastReplyAuthor = card.lastReplyAuthor;
    var replyNum = card.replyNum;

    var $card = $("<div class=\"well\">\n" +
        "        <div class=\"row\">\n" +
        "        <div class=\"col-sm-2\">\n" +
        "        <img src=\"images/headpic.png\" alt=\"\">\n" +
        "        </div>\n" +
        "        <div class=\"article-title col-sm-8\">\n" +
        articleTitle +
        "        </div>\n" +
        "\n" +
        "        </div>\n" +
        "        </div>");
    $("#home-starArticle").append($card);
    $("#home-starArticle").append("<h4>sdfdasf<h4>");


}
function createAllCard(card) {

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
    "<div class=\"link-userName card-username col-sm-2\">" + author + "</div>\n" +

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