$(function () {
    // 大轮播
    let mySwiper1 = new Swiper('.swiper-container1', {
        autoplay: {
            disableOnInteraction: false,
            delay: 6000
        },
        speed: 1500,
        grabCursor: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets'
        }
    })
    // 精品课程
    let mySwiper2 = new Swiper('.swiper-container2', {
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        autoplay: {
            disableOnInteraction: false,
            delay: 4000
        },
        speed: 3000,
        loop:true,
    })
    $('.leftPrev').on('click', function () {
        mySwiper2.slidePrev()
    })
    $('.rightNext').on('click', function () {
        mySwiper2.slideNext()
    })
    mySwiper2.el.onmouseenter = function () {
        mySwiper2.autoplay.stop()
    }
    mySwiper2.el.onmouseleave = function () {
        mySwiper2.autoplay.start()
    }
    //开班信息
    let myswiperSmall = new Swiper('.swiperSmall', {
        autoplay: {
            disableOnInteraction: false,
            delay: 4000
        },
        loop: true,
        effect: 'fade',
        speed: 2000
    })
    // 楼层滚动
    $(window).scroll(function () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = $('.accountant').offset().top
        if (offsetTop <= (scrollTop + innerHeight / 2)) {
            $('.anchor').show()
        } else {
            $('.anchor').hide()
        }
        let $courseBox = $('.courseBox')
        for (var i = 0; i < $courseBox.length; i++) {
            let $box = $($courseBox[i])
            if ($box.offset().top > scrollTop) {
                break
            }
        }
        $('.anchor li:eq(' + (i) + ')')
            .css({'background': '#023894', 'color': '#fff'})
            .siblings().css({'background': '', 'color': ''})
        $('.anchor').on('click', '.anchorBtn', function () {
            let $a = $(this)
            let i = $a.index()
            let offsetTop = $('.courseBox:eq(' + i + ')').offset().top
            $('html,body').stop(true).animate({
                scrollTop: offsetTop - 85
            }, 500)
        })
    })
    // tab切换
    if(!$('#d1>.tName').hasClass('.nowaday')){
        $('#d1').children().first().addClass('nowaday')
    }
    if(!$('#d2>.tName').hasClass('.nowaday')){
        $('#d2').children().first().addClass('nowaday')
    }
    if(!$('#d3>.tName').hasClass('.nowaday')){
        $('#d3').children().first().addClass('nowaday')
    }
    if(!$('#d4>.tName').hasClass('.nowaday')){
        $('#d4').children().first().addClass('nowaday')
    }
    if(!$('#d5>.tName').hasClass('.nowaday')){
        $('#d5').children().first().addClass('nowaday')
    }
    if(!$('#d6>.tName').hasClass('.nowaday')){
        $('#d6').children().first().addClass('nowaday')
    }
    if(!$('#d7>.tName').hasClass('.nowaday')){
        $('#d7').children().first().addClass('nowaday')
    }
    if(!$('#d8>.tName').hasClass('.nowaday')){
        $('#d8').children().first().addClass('nowaday')
    }
    $('.tName').click(function () {
        $(this).addClass('nowaday').siblings()
            .removeClass('nowaday')
    })
    //点击刷新
    let ref = $('.ref')
    for(let i=0; i<ref.length; i++){
        let a = $(ref[i]).data('id',i)
        // $(ref[i]).click(function () {
        //     $('.rate').css({'animation':'rotate linear 0.5s'})
        //     setTimeout(function () {
        //         $('.rate').css({'animation':''})
        //     },1000)
        // })
        // console.log(a)
        $(a).click(function(){
            // console.log($(this).data())
            $('.rate').css({'animation':'rotate linear 0.5s'})
            setTimeout(function () {
                $('.rate').css({'animation':''})
            },1000)
        })
    }
})