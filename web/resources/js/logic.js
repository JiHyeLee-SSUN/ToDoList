var time = 1;

$(function () {
    showList();
});

// 리스트 출력 이벤트

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
                $("#allList").empty();
            } else {
                $(result).each(function () {
                    htmls += '<li>';
                    htmls += '<input type="hidden" class="tno" name="tno" value="' + this.tno + '">\n';
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

// 내용 추가 이벤트

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

            url       : "/"
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

// 시간 정렬 이벤트

$(document).on('click', ".fa-clock-o", function () {
    time++;
    if (time % 2 != 0) {
        $('.fa-clock-o').removeClass('time_dsc');
    } else {
        $('.fa-clock-o').addClass('time_dsc');
    }
    showList();

});

// 삭제 버튼 클릭 이벤트

$(document).on('click','.fa.fa-trash', function(e){
    var tno = $(e.target).closest('li') .find('.tno').val();
    var paramData = JSON.stringify({
        "tno": tno
    });
    var headers = {
        "Content-Type"            : "application/json"
        , "X-HTTP-Method-Override": "DELETE"
    };

    $.ajax({
        url: "/"
        , data : paramData
        , type : 'DELETE'
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



