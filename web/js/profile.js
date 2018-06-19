$(function () {
    var id = getQueryString("articleId");
    if(id){
        alert("exist");
    }else {
        alert("not exist");
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