$(function () {
    showList();
});


function showList() {
    var url = "readAll";
    $.ajax({
        type    : "GET",
        url     : url,
        dataType: "json",
        success : function (result) {
            var htmls = ""
            if (result.length < 1) {
                htmls.push("오늘도 힘찬하루를 시작해보아요.");
            } else {
                $(result).each(function () {
                    htmls += '<li>';
                    htmls += '<input type="hidden" id="tno" name="tno" value="' + this.tno + '">\n';
                    htmls += '<span><i class="fa fa-trash"></i></span>' + this.regdate +" "+ this.content + '\n';
                    htmls += ' </li>';
                });

            }
            $("#allList").html(htmls);

        }
    });


}

$(document).on('click', ".fa-plus", function () {
    var todoText = $("#write").val();
    if (todoText.length > 0) {
        var paramData = JSON.stringify({
            "content": todoText
        });
        var headers = {
            "Content-Type"            : "application/json"
            , "X-HTTP-Method-Override": "POST"
        };
        $.ajax({

            url       : "create"
            , headers : headers
            , data    : paramData
            , type    : 'POST'
            , dataType: 'text'
            , success : function (result) {
                showList();
                $("#write").val("");
            }
            , error   : function (error) {
                console.log("에러 : " + error);
            }
        });
    }
});


