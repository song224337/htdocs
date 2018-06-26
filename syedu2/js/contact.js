$(function () {
    let map = new BMap.Map('baiduMap', {enableMapClick: true})
    // 地图中心点
    let point = new BMap.Point(120.74018, 31.260522)
    map.centerAndZoom(point, 16)
    // 添加地图类型控件
    map.addControl(new BMap.MapTypeControl())
    // 设置地图显示城市
    // map.setCurrentCity('苏州')
    // 滚轮缩放效果
    map.enableScrollWheelZoom(true)
    let content = '<div style="margin:0;line-height:20px;">' +
        '<img src="http://sqkj.syedugroup.com/img/shangyuan.png" alt="" style="float:right;zoom:1;overflow:hidden;width:89px;height:56px;margin-left:3px;"/>' +
        '地址：苏州工业园区新平街388号腾飞苏州创新园A2栋-9楼<br/>电话： 400-666-7863 ' +
        '</div>';

    //创建检索信息窗口对象
    var searchInfoWindow = null;
    searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
        title  : "<b>上元教育</b>",      //标题
        width  : 290,             //宽度
        height : 105,              //高度
        panel  : "panel",         //检索结果面板
        enableAutoPan : true,     //自动平移
        searchTypes   :[
            BMAPLIB_TAB_SEARCH,   //周边检索
            BMAPLIB_TAB_TO_HERE,  //到这里去
            BMAPLIB_TAB_FROM_HERE //从这里出发
        ]
    });
    var marker = new BMap.Marker(point); //创建marker对象
    marker.enableDragging(); //marker可拖拽
    marker.addEventListener("click", function(e){
        searchInfoWindow.open(marker);
    })
    map.addOverlay(marker); //在地图中添加marker
})