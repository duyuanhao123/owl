// 新闻公告
$.ajax({
    "url": "news.php",
    "dataType": "JSONP",
    "data": "hide=0",
    "jsonp": "x",
    "success": function (data) {
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
            // console.log(data[i]);
            // $(".news").append(`<li class="pic"><a href="#"><img src="${data[i].img}"></a><div class="text"><a href="#"><p>${data[i].title}</p></a></div></li>`);
            $(".news").append(`<div><a href="#"><img src="${data[i].img}"></a><a href="#"><p>${data[i].title}</p></a></div>`);
        }
    }
})

// 新英雄上线
$.ajax({
    "url": "news.php",
    "dataType": "JSONP",
    "data": "hide=1",
    "jsonp": "x",
    "success": function (data) {
        // console.log(data);
        for (var i in data) {
            // console.log(data[i])
            $(".newhero").append(`<img src="${data[i].img}"><div class="echo"><h1><i>${data[i].hero}</i></h1><h2>现已上线</h2><p>${data[i].introduce}</p><div class="go"><a><b>前往英雄页面</b></a></div></div>`)
        }
    }
})



// $(".allhero").append($(`<img src="${data[i].img}">`));
// $(".allhero>img:eq(" + index + ")").siblings().remove();

var lists = document.querySelectorAll('.list div');
for (var i = 0; i < lists.length; i++) {
    lists[i].setAttribute('dy', i + 1);
}
$('.list div img').mouseover(function () {

    var dy = ($(this).parent().parent().attr('dy'));
    // console.log(dy);
    $.ajax({
        "url": `news.php`,
        "dataType": "JSONP",
        "data": `hide=2&dy=${dy}`,
        "jsonp": "x",
        "success": (data) => {
            // console.log(data);
            // for (var i=0;i<data.length;i++) {
            // $(".allhero").append($(`<img src="${data[0].img}">`));
            $(".allhero>img").attr("src", `${data[0].img}`)
            //   $(".allhero>img").siblings().remove()
            // }
            $(".herocontent").children().remove()
            $(".herocontent").append($(`<h1>${data[0].js}</h1><p>${data[0].content}</p>`));
        }
    })
})


