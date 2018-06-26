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
})
$(function () {})