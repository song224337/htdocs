$(function () {
    //pageNumber点击效果添加
    $('.pageNumber').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
    //上一页 下一页
    $('.prevPage').click(function () {
        let that = $('.pageNumber')
        if(that.html() ===1){
            alert('再没有啦')
            $('.pageNumber')
        }else{
            console.log(that.html())
        }
    })
})