$(function () {
    // 页面头部加载
    $('#header').load('component/header.html')
    //底部加载
    $('#footer').load('component/footer.html')
    // 免费领取课程
    $('#delete').click(function () {
        $('.free').hide()
    })
    //header阴影
    $(window).scroll( function () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 10) {
            $('.header').css({'box-shadow': '2px 0 3px #666'})
        }else{
            $('.header').css({'box-shadow': ''})
        }
    })
    // 免费领取课程
    $('#freeBtn').click(function(){
        let n = $('#uname').val()
        let p = $('#uphone').val()
        let reg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if(n === ''){
            $('.s1').show()
            $('#uname').focus(()=>[
                $('.s1').hide()
            ])
        } else if(!reg.test(p)){
            $('.s2').show()
            $('#uphone').focus(()=>{
                $('.s2').hide()
            })
        }else{
            $('#messageWindow').show()
            console.log(true)
        }

    })
})
