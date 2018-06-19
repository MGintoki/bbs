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
var $zz = $("<div class=\"well well-sm\">\n" +
    "             \n" +
    "                <div class=\"row\">\n" +
    "                 \n" +
    "                  <div class=\"col-sm-2 clearfix\">\n" +
    "                    <img class=\"img-thumbnail content-card-head\" src=\"images/userHead/demo.png\" alt=\"\">\n" +
    "                  </div>\n" +
    "                \n" +
    "                  <div class=\"col-sm-8 clearfix\" card-mainContent>\n" +
    "                    <div class=\"row\">\n" +
    "                      \n" +
    "\n" +
    "                      <a class=\"link-userName card-username col-sm-2\">\n" +
                                 author +
    "                      </a>\n" +
    "                    \n" +
    "                      <div class=\"col-sm-6\">\n" +
    "                        <h4 class=\"article-title\">" + articleTitle + "</h4>\n" +
    "                      </div>\n" +
    "                      <div class=\"col-sm-2\">\n" +
    "                          <div class=\"btn-group\">\n" +
    "                              <button type=\"button\" class=\"btn-sm btn btn-info master-btn dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                                 管理<span class=\"caret\"></span>\n" +
    "                              </button>\n" +
    "                              <ul class=\"dropdown-menu\">\n" +
    "                                <li><a href=\"#\">删除</a></li>\n" +
    "                                <li><a href=\"#\">置顶</a></li>\n" +
    "                                <li><a href=\"#\">加精</a></li>\n" +
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
    "                        2018-6-13 15:30:23\n" +
    "                      </div>\n" +
    "                      <div class=\"recent-reply col-sm-5\">\n" +
    "                        最近回复于\n" +
    "                        <span class='card-username'>"+ lastReplyAuthor +"</span>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                \n" +
    "\n" +
    "                </div>\n" +
    "              </div>");

$("#allCard-panel").append($zz);