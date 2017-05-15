
// 关于我们
$(function(){
    $(".contact-fgs").click(function(){
        $(this).css('color','#f63');
        $(this).siblings().css('color','#999');
        var index = $(this).index();
        var str = $(".fgs-exactly-content").find("li").eq(index);
        str.removeClass("about-disappear").siblings().addClass("about-disappear");
    });

    // $(".about-menu-item").click(function(){
    //     $(this).addClass("active").siblings().removeClass("active");
    //     $(".about-right").eq($(this).index()).removeClass("about-disappear").siblings(".about-right").addClass("about-disappear");
    //
    // });
})


