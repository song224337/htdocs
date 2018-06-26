$(function () {
    // 表单验证提交
    $('.consult').click((e)=>{
        e.preventDefault()
        var uname = $('#uname1').val(),
            uphone = $('#uphone1').val(),
            reg=/^[1][3,4,5,7,8][0-9]{9}$/;
        // 验证
        if(uname===null || uname===''){
            $('.em1').show()
            $('#uname1').focus(()=>{
                $('.em1').hide()
            })
        }else if(uphone===null || uphone===""){
            $('.em2').show()
            $('#uphone1').focus(()=>{
                $('.em2').hide()
            })
        }else if(!reg.test(uphone)){
            $('.em3').show()
            $('#uphone1').focus(()=>{
                $('.em3').hide()
            })
        }else{
            $('.messageWindow').show()
            //数据存储ajax
        }
    })
})