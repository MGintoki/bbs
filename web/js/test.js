window.onload=function () {
    $(".aa").click(function () {
        alert(this.attr("title"));
    });
    $("#test").click(function () {
        alert("zz");
    });
}