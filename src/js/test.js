/**
 * Created by cjun on 2016/4/21.
 */
(function (window, undefined) {
    //function sum(a,b){
    //    return a+b;
    //}
    //var c = 1;
    //sum(10,c);
    var date = new Date();
    var num = date.getDay();
    var nowPre = date.getTime();
    var nowNext = date.getTime();

    $(".tb-title span")[0].innerHTML=date.getFullYear()+"年"+(date.getMonth()+1)+"月本周";
    $(".thead-content th").each(function(i,item){
        //alert(i);
        if( i == num-1 ){
              $(this).addClass("data-on");
              $(this).children("span")[0].innerHTML="(今天)";

            for(var j=num-1;j>0;j--){
                nowPre = nowPre - 24*60*60*1000;
                var pre = new Date(nowPre);
                var m = ("0" + (pre.getMonth() + 1)).slice(-2);
                var d = ("0" + pre.getDate()).slice(-2);
               $(this).parent().children()[j-1].childNodes[1].innerHTML = "(" + m+"月"+d+"日)";
        }
            for(var k =num;k<7;k++){
                nowNext = nowNext + 24*60*60*1000;
                var next = new Date(nowNext);
                var m = ("0" + (next.getMonth() + 1)).slice(-2);
                var d = ("0" + next.getDate()).slice(-2);
                $(this).parent().children()[k].childNodes[1].innerHTML = "(" + m+"月"+d+"日)";
            }
}

        if(num==0){
            $(".thead-content:last-child").addClass("data-on");
            $(".thead-content:last-child").children("span")[0].innerHTML="(今天)";
            for(var j=6;j>0;j--){
                nowPre = nowPre - 24*60*60*1000;
                var pre = new Date(nowPre);
                var m = ("0" + (pre.getMonth() + 1)).slice(-2);
                var d = ("0" + pre.getDate()).slice(-2);
                $(this).parent().children()[j-1].childNodes[1].innerHTML = "(" + m+"月"+d+"日)";
            }
        }
    })
    $(".title-left").click = function(){
        $(".thead-content th").each(function(i,item){

        })
    }


}(window));