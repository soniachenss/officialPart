/**
 * Created by chenshuangs on 2016/10/24.
 */
$(function(){
    //侧边栏
    var isIE10 = /MSIE\s+10.0/i.test(navigator.userAgent)
        && (function () {
            "use strict";
            return this === undefined;
        }());
    var isIE11 = (/Trident\/7\./).test(navigator.userAgent);
    if (isIE10 || isIE11) {
        $(".es-bar-win").css("margin-right", '16px');
    }

    if($(".es-bar-menu-win").find('[data-toggle="tooltip"]').length>0){
        $(".es-bar-menu-win").find('[data-toggle="tooltip"]').tooltip({container: '.es-bar'});
    }


    $(".xn-btn-win").click(function() {
        var username = $("#official-right-username").val();
        var mobile = $("#official-right-mobile").val();
        var vip = $("official-right-vip").val();
        var areaCode = $("official-right-areaCode").val();
        var program = $("official-right-program").val();
        var cururl = window.location.href;
        $.ajax({
            type : "post",
            url : "http://www.17win.com/api/service/online",
            dataType : "jsonp",
            data:{
                username:username,
                mobile:mobile,
                vip:vip,
                areaCode:areaCode,
                program:program,
                cururl:cururl,
            },
            jsonp: "callback",
            success : function(obj){
                if (obj.uid && obj.uname) {
                    window.NTKF_PARAM = {
                        siteid: obj.siteid,
                        settingid: obj.settingid,
                        erpparam: obj.erpparam,
                        uid: obj.uid,
                        uname: obj.uname
                    };
                } else {
                    window.NTKF_PARAM = {
                        siteid: obj.siteid,
                        settingid: obj.settingid,
                        erpparam: obj.erpparam
                    };
                }
                openInPageChat(obj.settingid);
                function openInPageChat(jnz) {
                    var protocol = "https:" == location.protocol ? "https://" : "http://";
                    $.get(protocol + 'dl.ntalker.com/js/xn6/ntkfstat.js?siteid=kf_9158', function () {
                        NTKF.im_openInPageChat(jnz)
                    }, 'script');
                }
            }
        });
    })



    //在线客服
    //$(".xn-btn").click(function() {
    //    var callback=123;
    //    var url = "/api/service/online";
    //    if (typeof(area) == 'undefined') {
    //        area = '';
    //    }
    //    var data = {
    //        area: area,
    //        url: 'http://www.17win.com/jsonp?callback=123'
    //    };
    //    $.get(url, data, function (res) {
    //        alert(1)
    //        var obj = JSON.parse(res);
    //        if (obj.uid && obj.uname) {
    //            window.NTKF_PARAM = {
    //                siteid: obj.siteid,
    //                settingid: obj.settingid,
    //                erpparam: obj.erpparam,
    //                uid: obj.uid,
    //                uname: obj.uname
    //            };
    //        } else {
    //            window.NTKF_PARAM = {
    //                siteid: obj.siteid,
    //                settingid: obj.settingid,
    //                erpparam: obj.erpparam
    //            };
    //        }
    //        openInPageChat(obj.settingid);
    //        function openInPageChat(jnz) {
    //            var protocol = "https:" == location.protocol ? "https://" : "http://";
    //            $.get(protocol + 'dl.ntalker.com/js/xn6/ntkfstat.js?siteid=kf_9158', function () {
    //                NTKF.im_openInPageChat(jnz)
    //            }, 'script');
    //        }
    //    });
    //});



    //返回顶部
    $(".goto-top-win").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });


//模态框
    window.modalDeal = {
        showMoal:function(){
            $(".advice-modal").fadeIn();
        },
        hideModal:function(){
            $(".advice-modal").click(function(){
                $(this).fadeOut();
            })
            $(".adv-modal-content").bind('click',function(e){
                e.stopPropagation();
            });
            $(".ad-close").click(function(){
                $(".advice-modal").fadeOut();
            })
        }(),
        envetBind:function(){
            $('.advice-content').bind('input propertychange', function() {
                var val = $(".advice-content").val();
                if(val == ''){
                    $(".sub-btn-box .btn-advice-submit").css('background-color','#ddd');
                    $('.btn-advice-submit').attr("disabled",true);
                }else{
                    $(".sub-btn-box .btn-advice-submit").css('background-color','#f63');
                    $('.btn-advice-submit').removeAttr("disabled");
                }
            });
            $(".yqy-advice").submit(function(){
                $(".advice-modal").fadeOut();
                var content = $(".advice-content").val();
                var accountId = $("#official-right-accountId").val();
                $.ajax({
                    type : "post",
                    url : "http://www.17win.com/api/feedback",
                    dataType : "jsonp",
                    data:{
                        content:content,
                        accountId:accountId,
                    },
                    jsonp: "callback",
                    success : function(data){
                        $(".advice-modal").fadeOut();
                        $(".feedback-msg").fadeIn();
                        if(data.status==true){
                            $(".feedback-msg").html("提交成功！");
                        }else{
                            $(".feedback-msg").html("提交失败！");
                        }
                        setTimeout(function(){
                            $(".feedback-msg").fadeOut()
                        },2000);
                    }
                });
                return false;
            })
        }(),
    }
    $(".advice-text-win").click(function(){
        modalDeal.showMoal();
    });
})