$(function () {
    // alert($("#writeCard-select").val());
   $("#writeCard-btn").click(function () {
       // alert("1");
       var $user = JSON.parse(sessionStorage.user);
       var $userName = $user.userName;
       $.ajax({
           url:"http://127.0.0.1:8080/new",
           type:"post",
           dataType:"json",
           data:{
               title:$("#writeCard-title").val(),
               body:$("#writeCard-textarea").val(),
               userName:$userName,
                sort:$("#writeCard-select").val(),
               label:$("#writeCard-label").val()
           },
           success:function(data){
               if(data.message=="new article successfully"){

                   window.location.href='./index.html';
                   alert("发布成功");
               }else{
                   alert(data.message);
                   console.log();

               }
           }
       });
   })
});
