/**
 * Created by chenshuangs on 2016/10/27.
 */
$(function(){
    $(".personal-menu-item").each(function() {
        var val= $("#selectedMenuId").val();
        var this_val=$(this).find('.win-personal-menu').val();
        if(this_val==val){
            $(this).find(".personal-menu-img-active").css('display','inline-block');
            $(this).find(".personal-menu-img-gray").css('display','none');
            $(this).find('a').css('color','#f63');
        }
    })
})