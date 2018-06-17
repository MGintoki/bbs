
window.onload = function () {
    ($.ajax({

        url: "http://127.0.0.1:8080/article",
        type: "get",
        dataType:"json",
        success:function (data) {
            $.each(data.data, function() {
                // alert("循环");
                createCard(this);
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
};
$(document).ready(function () {
    $("#writeCard-btn").click(function () {
        window.location.href="writeCard.html";
    })
});
function createCard(card) {

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
    "<a class=\"card-username col-sm-2\">" + author + "</a>\n" +

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
        "<a href=\"\">" + lastReplyAuthor + "</a>" +
        "</div></div></div></div></div>\n");


    $("#allCard-panel").append($card);


}