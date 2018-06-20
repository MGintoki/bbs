function modifyPassword() {
    var user = JSON.parse(sessionStorage.getItem("user"));
    $.ajax({
        url: "http://127.0.0.1:8080/u/modify/password",
        type: "post",
        data: {
            userName: user.userName,
            oldPassword: $("#oldPassword").val(),
            newPassword: $("#newPassword").val()
        },
        dataType: "json",
        success: function (data) {
            alert(data.message);
            window.location.reload();
        }
    });
}