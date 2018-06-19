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
            }
        })
    })

    $(function(){
        $.ajax({
            url:"http://127.0.0.1:8080/t/"+getQueryString("articleId"),
            type:"get",
            dataType:"json",
            success:function(data){
                var trs = "";;
                alert(data.data);
                $.each(data.data,function(n,value){
                    alert(getQueryString(value.author));
                    trs+="<div class=\"well well-sm\"><div class=\"row\"><div class=\"col-sm-2\"><img class=\"img-thumbnail content-card-head\" src=\"upload/images/";
                    trs+=getUserHeadImg(value.author)+"\" alt=\"\"</div><div class=\"col-sm-10\"><a href=\"user.html?userName="+value.author+"\">"+value.author+"</a>";
                    trs+="<p>"+value.postTime+"</p></div></div><div class=\"row\"><div class=\"reply-content\"><p>"+value.message+"</p></div></div></div>"
                })
                $("#replyDiv").html(trs);
            }
        })
    })
    //根据参数名获取url传参
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
        return unescape(r[2]);
        }
        return null;
    }
    //根据用户名获取头像信息
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