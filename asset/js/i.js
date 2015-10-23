var globalObj = {type : 1};
(function($){
    $("body")[0].addEventListener("touchmove",function(e){
        //e.preventDefault();
    });
    $("#panel").makebc();
    $("#slider").makeSlide();
    $("#profitlist").specSlider();

    calculateProfit();

    $("#type1").tap(function(){
        globalObj.type = 1;
        $(this).addClass("active").siblings(".active").removeClass("active");
        calculateProfit();
    });
    $("#type2").tap(function(){
        globalObj.type = 2;
        $(this).addClass("active").siblings(".active").removeClass("active");
        calculateProfit();
    });
    $("#lookplan").tap(function(){
        payBackPlan();
    });
})(Zepto)

function calculateProfit(){
    var m = Number($("#money").val()),
        d = Number($("#lenddate").val()),
        r = Number($("#rate").val())/100,result= 0,bankresult= 0,
        mr = r / 12,
        bmr = 0.035 / 12;
    if(globalObj.type == 1){
        result = m*r / 12 * d;
        bankresult = m*0.035 /12 * d;

    }
    if(globalObj.type == 2){
        result = (m * mr * Math.pow((1+mr),d) / (Math.pow(1+mr,d)-1));
        result = result * d - m;
        bankresult = (m * bmr * Math.pow(1+bmr,d)) / (Math.pow(1+bmr,d)- 1)*d -m;
    }
    $("#result1").find(".up>span").text(result.toFixed(2));
    $("#result2").find(".up>span").text(bankresult.toFixed(2));
    $("a.btn-close").tap(function(){
        $("#layer").hide();
        $(".coverLayer").hide();
        $("body").css("overflow","auto");
    });

}
function payBackPlan(){
    var m = Number($("#money").val()),
        d = Number($("#lenddate").val()),
        r = Number($("#rate").val())/100,result= 0,bankresult= 0,
        mr = r / 12,$target = $("#plan");
    if(globalObj.type == 1){
        result = m*r / 12 * d;
    }
    if(globalObj.type == 2){
        result = (m * mr * Math.pow((1+mr),d) / (Math.pow(1+mr,d)-1));
    }
    var type2profit =result*d;
    var $type = $("<div class='backtype'><span>还款方式："+(globalObj.type == 1 ?"按月还息到期还本" : "等额本息")+"</span></div>");
    var $icon_help = $("<i class='icon-help'></i>");

    $target.html("");
    $icon_help.tap(function(){

        $("body").css("overflow","hidden");
        var scrollY = window.scrollY;
        $("#layer").show().css("top",scrollY+"px");
        $(".coverLayer").show().css("top",scrollY+"px");
    });
    $type.append($icon_help);
    var $ul = $("<ul class='planlist'></ul>");
    for(var i=1;i<=d;i++){
        var $li = $("<li></li>");
        var $dl = $("<dl></dl>");
        if(globalObj.type == 1){
            var month_intrest = Number(m * r / 12).toFixed(2);
            var $dt = $("<dt>期数：<span>"+ i + "/" + d +"</span></dt>"),
                $dd1 = $("<dd>还款利息：<span>"+ month_intrest +"</span></dd>"),
                $dd2 = $("<dd>还款本金：<span>0</span></dd>"),
                $dd3 = $("<dd>待还金额：<span>"+(result-(month_intrest*i) + m).toFixed(2)+"</span></dd>");
            if(i==d){
                $dd1.children("span").text((result-(month_intrest*(i-1))).toFixed(2));
                $dd2.children("span").text(m);
                $dd3.children("span").text(0);
            }
            $dl.append($dt).append($dd1).append($dd2).append($dd3);
            $li.append($dl);
            $ul.append($li);
        }
        if(globalObj.type == 2){
            //debugger;
            var month_intrest = (m * mr * Math.pow(1+mr,i-1) / (Math.pow(1+mr,d)-1)).toFixed(2);
            var $dt = $("<dt>期数：<span>"+ i + "/" + d +"</span></dt>"),
                $dd1 = $("<dd>还款利息：<span>"+ Number(result-month_intrest).toFixed(2) +"</span></dd>"),
                $dd2 = $("<dd>还款本金：<span>"+month_intrest+"</span></dd>"),
                $dd3 = $("<dd>待还金额：<span>"+(type2profit-(result*i)).toFixed(2)+"</span></dd>");
            $dl.append($dt).append($dd1).append($dd2).append($dd3);
            $li.append($dl);
            $ul.append($li);
        }
    }
    $target.append($type).append($ul);
}
window.onload = function(){
    $("#layer").height($(window).height());
    $(".coverLayer").height($(window).height());
}