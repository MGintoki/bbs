$(function(){
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
            $("#articleAuthor").text(data.data.author);}})
});

$(function () {
    var articleId = getQueryString("articleId");
    // alert(articleId);
    getReply(1, articleId);
    getButton();
    $("#writeReply").click(function () {
        writeReply();
    })


});

function getReply(page, articleId) {
    $.ajax({
        url:"http://127.0.0.1:8080/t/"+ articleId,
        type:"get",
        dataType:"json",
        data:{
            page:page
        },
        success:function(data){
            $("#replyDiv").html("");

            $.each(data.data,function(n,value){
                createReply(this);

            });

        }
    })
}
//根据参数名获取url传参
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

/**
 * 创建一条回复
  * @param reply
 * @returns {jQuery|HTMLElement}
 */
function createReply(reply) {
    var replyId = reply.replyId;
    var articleId = reply.articleId;
    var author = reply.author;
    var message = reply.message;
    var postTime = reply.postTime;
    var headImg = getUserHeadImg(author);

    var $reply = $("<div class='well well-sm'>" +
        "<div class=\"row\">\n" +
        "                            <div class=\"col-sm-1\">\n" +
        "                                <img class='reply-pic' src=\""+ headImg+"\" alt=\"\">\n" +
        "                            </div>\n" +
        "                            <div class=\"col-sm-11\">\n" +
        "                                <a href=\""+"./profile.html?visit=" + author+"\" class=\"link-userName\">\n" +
        "                                        "+author+"\n" +
        "                                </a>\n" +
        "                                <div class=\"data\">\n" +
        "                                    "+ postTime+"\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "                        <div class=\"article-content row\">\n" +
        "                            <p>"+ message+"</p>\n" +
        "                        </div>"+
        "</div>"
    );

    $("#replyDiv").append($reply);
}
function getButton() {
    // alert("getbutton");
    $($.ajax({
        url:"http://127.0.0.1:8080/article/replyNum",
        type:"get",
        data:{
            articleId:getQueryString("articleId")
        },
        success:function(data){
            var pageNum=data.data;

            for(var i=1;i<=pageNum;i++){

                var $btn = $("<button type=\"button\" title=\"\" class=\"replyChangeBtn btn btn-default\" onclick='changePage(" + i + ")'>第" + i+"页</button>");
                $("#changeBtn").append($btn);
            }

        }
    }));
}
function writeReply() {
    var message = $("#replyText").val();
    var $user = JSON.parse(sessionStorage.user);
    var author = $user.userName;
    var articleId = getQueryString("articleId");
    var URL = "http://127.0.0.1:8080/t/"+ articleId;
    $.ajax({
        url:URL,
        type:"post",
        dataType:"json",
        data:{
           userName:author,
            message:message
        },
        success:function(data){
           location.reload();
        }
    });

}

function changePage(page) {

   getReply(page,getQueryString("articleId"));
}
