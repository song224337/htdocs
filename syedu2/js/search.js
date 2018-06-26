$(function () {
    // 八大品牌激活显示当前效果
    $('.courseName').on('click', '.button1', (e) => {
        e.preventDefault()
        let $tar = $(e.target)
        $tar.addClass('active').siblings().removeClass('active')
    })
    // 课程分类激活当前效果
    $('.every').on('click', '.everyName', (e) => {
        e.preventDefault()
        let $this = $(e.target)
        $this.addClass('active').siblings().removeClass('active')
    })

    // 已参加人数取随机数
    function getNum() {
        let number = $('.num')
        let html = ''
        for (let i = 0; i < number.length; i++) {
            html = parseInt(Math.random() * (40000 - 10000 + 1) + 10000)
            $(number[i]).html(html)
        }
    }

    getNum()
})
$.fn.extend({
    "initPage":function(listCount,currentPage,fun){
        var maxshowpageitem = $(this).attr("maxshowpageitem");
        if(maxshowpageitem!=null&&maxshowpageitem>0&&maxshowpageitem!=""){
            page.maxshowpageitem = maxshowpageitem;
        }
        var pagelistcount = $(this).attr("pagelistcount");
        if(pagelistcount!=null&&pagelistcount>0&&pagelistcount!=""){
            page.pagelistcount = pagelistcount;
        }

        var pageId = $(this).attr("id");
        page.pageId=pageId;
        if(listCount<0){
            listCount = 0;
        }
        if(currentPage<=0){
            currentPage=1;
        }
        page.setPageListCount(pageId,listCount,currentPage,fun);

    }
});
var  page = {
    "maxshowpageitem":5,//最多显示的页码个数
    "pagelistcount":10,//每一页显示的内容条数
    /**
     * 初始化分页界面
     * @param listCount 列表总量
     */
    "initWithUl":function(pageId,listCount,currentPage){

        var pageCount = 1;
        if(listCount>0){
            var pageCount = listCount%page.pagelistcount>0?parseInt(listCount/page.pagelistcount)+1:parseInt(listCount/page.pagelistcount);
            page.pageCount2 = pageCount;
        }
        var appendStr = page.getPageListModel(pageCount,currentPage);
        $("#"+pageId).html(appendStr);
    },
    /**
     * 设置列表总量和当前页码
     * @param listCount 列表总量
     * @param currentPage 当前页码
     */
    "setPageListCount":function(pageId,listCount,currentPage,fun){
        listCount = parseInt(listCount);
        currentPage = parseInt(currentPage);
        page.initWithUl(pageId,listCount,currentPage);
        page.initPageEvent(pageId,listCount,fun);
        if(typeof fun == "function"){
            fun(currentPage);
        }
    },
    "initPageEvent":function(pageId,listCount,fun){
        $("#"+pageId +">a[class='pageItem']").on("click",function(){
            page.setPageListCount(pageId,listCount,$(this).attr("page-data"),fun);
        });
        $('.skipToBtnPage').unbind('click').bind('click',function(){
            var nubmer=$('.skipto').val();
            var re = /^[1-9]+[0-9]*]*$/;
            if (re.test(nubmer)) {
                if(parseInt(nubmer) <= page.pageCount2){
                    page.setPageListCount(pageId,listCount,nubmer,fun);
                }else{
                    $('.skipto').val('');
                }
            }else{
                $('.skipto').val('');
            }
        })
    },
    "getPageListModel":function(pageCount,currentPage){
        var prePage = currentPage-1;
        var nextPage = currentPage+1;
        var prePageClass ="pageItem";
        var nextPageClass = "pageItem";
        if(prePage<=0){
            prePageClass="pageItemDisable";
        }
        if(nextPage>pageCount){
            nextPageClass="pageItemDisable";
        }
        var appendStr ="";

        //appendStr+="<li class='"+prePageClass+"' page-data='1' page-rel='firstpage'>首页</li>";
        //appendStr+="<li class='"+prePageClass+"' page-data='"+prePage+"' page-rel='prepage'>&lt;上一页</li>";
        appendStr+="<a href='##' class='"+prePageClass+"' page-data='"+prePage+"' page-rel='prepage'>上一页</a>";
        var miniPageNumber = 1;
        if(currentPage-parseInt(page.maxshowpageitem/2)>0&&currentPage+parseInt(page.maxshowpageitem/2)<=pageCount){
            miniPageNumber = currentPage-parseInt(page.maxshowpageitem/2);
        }else if(currentPage-parseInt(page.maxshowpageitem/2)>0&&currentPage+parseInt(page.maxshowpageitem/2)>pageCount){
            miniPageNumber = pageCount-page.maxshowpageitem+1;
            if(miniPageNumber<=0){
                miniPageNumber=1;
            }
        }
        var showPageNum = parseInt(page.maxshowpageitem);
        if(pageCount<showPageNum){
            showPageNum = pageCount
        }
        //判断什么时候显示出来首尾页
        var appendFirst = false, appendEnd = false;
        if(miniPageNumber > 1){
            appendFirst = true;
        }
        if((miniPageNumber - 1 + showPageNum) < pageCount){
            appendEnd = true;
        }
        //带省略号的首页
        if(appendFirst){
            appendStr+="<a href='##' class='pageItem' page-data='1'>1</a><span class='pageItem-ellipsis'>...</span>";
        }

        //循环显示页数
        for(var i=0;i<showPageNum;i++){
            var pageNumber = miniPageNumber++;
            var itemPageClass = "pageItem";
            if(pageNumber==currentPage){
                itemPageClass = "pageItemActive";
            }

            appendStr+="<a href='##' class='"+itemPageClass+"' page-data='"+pageNumber+"' page-rel='itempage'>"+pageNumber+"</a>";

        }
        //带省略号的尾页
        if(appendEnd){
            appendStr+="<span class='pageItem-ellipsis'>...</span><a href='##' class='pageItem' page-data='"+pageCount+"'>"+pageCount+"</a>";
        }
        appendStr+="<a href='##' class='"+nextPageClass+"' page-data='"+nextPage+"' page-rel='nextpage'>下一页</a>";
        //appendStr+="<li class='"+nextPageClass+"' page-data='"+nextPage+"' page-rel='nextpage'>下一页&gt;</li>";
        //appendStr+="<li class='"+nextPageClass+"' page-data='"+pageCount+"' page-rel='lastpage'>尾页</li>";
        appendStr+='<div style="display:inline-block;margin-left:5px;">跳转到:<input type="text" class="skipto" placeholder="页码"/>'
            +'<div class="skipToBtnPage">跳转</div>'
            +'</div>';
        return appendStr;

    }
}
$("#page").initPage(123,1,function(pageNum){
        // console.log(pageNum);
});
