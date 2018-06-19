$(function () {
    var $user = JSON.parse(sessionStorage.user);
    var $userName = $user.userName;
    $.ajax({
        url: "http://127.0.0.1:8080/u/getAllArticle",
        type: "get",
        dataType: "json",
        data:{
            userName:$userName
        },
        success: function (data) {

            $.each(data.data, function () {

                createCard1(this);


            });
            $("#btn-delete").click(function () {

                deleteCard();
            })
        }
    })
});

function createCard1(card) {
    var articleId = card.articleId;
    var articleTitle = card.articleTitle;
    var articleBody = card.articleBody;
    var author = card.author;
    var sort = card.sort;
    var label = card.label;
    var headImg = card.headImg;

    var postTime = card.postTime;
    var lastReplyAuthor = card.lastReplyAuthor;
    var replyNum = card.replyNum;

    var $card = $("<tr>\n" +
        "\n" +
        "                        <th>\n" +
        "\n" +
        "                            <label>\n" +
        "                                <input title=\""+articleId+"\" class=\"isChecked\" type=\"checkbox\">\n" +
        "                            </label>\n" +
        "\n" +
        "                        </th>\n" +
        "                        <th>" + author + "</th>\n" +
        "                        <th>" + articleId + "</th>\n" +
        "                        <th>" + postTime + "</th>\n" +
        // "                        <th> <button type=\"button\" title=\""+ articleId +"\" class=\"change-btn btn btn-info\">修改帖子</button></th>\n" +
        "\n" +
        "                    </tr>");

    $("#tBody").append($card);

}

function deleteCard() {
    var items = document.getElementsByClassName("isChecked");
    for (var i = 0; i < items.length; i++) {
        if (items[i].checked == true) {
            var articleId = items[i].getAttribute("title");
            $.ajax({
                url: "http://127.0.0.1:8080/deleteArticle",
                type: "post",
                dataType: "json",
                data: {
                    articleId:articleId
                },
                success: function (data) {

                    if (data.message == "delete success") {
                        alert("删除成功");
                        location.reload();
                    } else {
                        alert(data.message);
                    }
                }
            })
        }
    }
}