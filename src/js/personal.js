/**
 * Created by chenshuangs on 2016/9/20.
 */


//    个人中心
$(".personal-menu-item").each(function() {
    var windowUrl=window.location.href; //获取当前url链接
    var t=$(this).find('a').attr('href');
    if(t==windowUrl){
        $(this).find(".personal-menu-img-active").css('display','inline-block');
        $(this).find(".personal-menu-img-gray").css('display','none');
        $(this).find('a').addClass('active');  //添加当前位置样式
    }
})