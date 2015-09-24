(function($){
    var settings = {
        data:[14,15,16,17],
        currentProfit:15,
        onePageShow:3,
        currentIndex:2
    };
    var CONTSTANT = {
        ow : 20 / settings.onePageShow
    };
    $.specSlider = {
        init:function(target){
            var _eq = 0;
            target.css({
                width:(settings.onePageShow+1) * CONTSTANT.ow + "rem"
            });
            for(var i=0;i<settings.data.length;i++){
                if(settings.currentProfit == settings.data[i]){
                    _eq = i;
                    break;
                }
            }
            settings.currentIndex = i;
            target.css("margin-left",-_eq * CONTSTANT.ow + "rem").children().eq(_eq+1).addClass("active").css("font-size","2rem");
        },
        move:function(){

        }
    };
    $.fn.specSlider = function(){
        var $this = $(this),
            startP,moveP;
        $.specSlider.init($this);
        $this.on("touchstart",function(event){
            startP = moveP = event.touches[0].pageX;
        });
        $this.on("touchmove",function(event){
            var c = event.touches[0].pageX - moveP;
            moveP = event.touches[0].pageX;

            if( c > 0){

            }else{

            }

        });
        $this.on("touchend",function(){

        });
    }
})(Zepto)