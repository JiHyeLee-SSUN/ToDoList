var time = 1;

$(function () {
    showList();
});


function showList() {
    var url;

    if (time % 2 != 0) {
        url = "readAsc";
    } else {
        url = "readDesc";
    }

    $.ajax({
        type    : "GET",
        url     : url,
        dataType: "json",
        success : function (result) {
            var htmls = ""
            if (result.length < 1) {
                alert("일정이 존재하지 않습니다.");
            } else {
                $(result).each(function () {
                    htmls += '<li>';
                    htmls += '<input type="hidden" id="tno" name="tno" value="' + this.tno + '">\n';
                    htmls += '<span><i class="fa fa-trash"></i></span>' + this.regdate + " " + this.content + '\n';
                    htmls += ' </li>';
                });
                $("#allList").html(htmls);

            }
        }, error: function (error) {
            console.log("에러 : " + error);
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

$(document).on('click', ".fa-clock-o", function () {
    time++;
    if (time % 2 != 0) {
        $('.fa-clock-o').removeClass('time_dsc');
    } else {
        $('.fa-clock-o').addClass('time_dsc');
    }
    showList();

});

$("ul").on("click", "span", function(event){
    var tno = $("#tno").val();
    var paramData = JSON.stringify({
        "tno": tno
    });
    var headers = {
        "Content-Type"            : "application/json"
        , "X-HTTP-Method-Override": "POST"
    };

    $.ajax({
        url: "delete"
        , data : paramData
        , type : 'POST'
        , dataType : 'text'
        , headers : headers
        , success: function(result){
            showList();
        }
        , error: function(error){
            console.log("에러 : " + error);
        }
    });
})



