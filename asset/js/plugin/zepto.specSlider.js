(function($){
    var settings = {
        data:[14,15,16,17],
        currentProfit:17,
        onePageShow:3,
        currentIndex:null
    };
    var CONTSTANT = {
        ow : 20 / settings.onePageShow,
        ww : $(window).width(),
        ew : $(window).width() / 6
    };
    $.specSlider = {
        init:function(target){
            var _eq = 0;
            target.css({
                width:(settings.data.length +1 ) * CONTSTANT.ow + "rem"
            });
            for(var i=0;i<settings.data.length;i++){
                if(settings.currentProfit == settings.data[i]){
                    _eq = i;
                    break;
                }
            }
            settings.currentIndex = i+1;
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
            $this.removeClass("trans");
        });
        $this.on("touchmove",function(event){
            event.preventDefault();
            var c = event.touches[0].pageX - moveP;
            moveP = event.touches[0].pageX;
            var domIndex = settings.currentIndex;
            var ml = parseFloat($(this).css("margin-left")),
                rootFz = parseFloat(document.documentElement.style.fontSize)/100;
            if( c > 0){
                //right
                var a = Math.abs((moveP-startP)/16*rootFz * ( 1 /6.6 ));
                $this.css({
                    "margin-left":  ml +( c / 16 * rootFz )+ "rem"
                });
                $this.children().eq(domIndex).css({
                    "font-size":2 - (a>=1?1:a) +"rem"
                });
                $this.children().eq(domIndex-1).css({
                    "font-size":1 + (a>=1?1:a) +"rem"
                });
                console.log(domIndex)
            }else{
                var b = Math.abs((moveP-startP)/16*rootFz * ( 1 /6.6 ) );
                $this.css({
                    "margin-left":  ml +( c / 16 * rootFz )+ "rem"
                });
                $this.children().eq(domIndex).css({
                    "font-size":2 - (b>=1?1:b)+"rem"
                });
                $this.children().eq(domIndex+1).css({
                    "font-size":1 + (b>=1?1:b)+"rem"
                })
            }

        });
        $this.on("touchend",function(event){
            var cha = moveP - startP;
            var ml ;

             if(cha > 0 && (Math.abs(cha) >=  CONTSTANT.ew)){
                 //prev
                 $this.find(".active").removeClass('active');
                 var currentIndex = settings.currentIndex-1;
                 if(currentIndex < 1){currentIndex=1}
                 $this.addClass("trans").css({
                     "margin-left": - (currentIndex-1)*6.6+ "rem"
                 });
                 $this.children().eq(currentIndex).animate({
                     "font-size":"2rem"
                 }).addClass("active");
                 $this.children().eq(currentIndex-1).animate({
                     "font-size":"1rem"
                 });
                 settings.currentIndex = currentIndex;
             }
            if(cha > 0 && (Math.abs(cha) <  CONTSTANT.ew)){
                //prev

                var currentIndex = settings.currentIndex - 1 ;
                $this.addClass("trans").css({
                    "margin-left": - (currentIndex)*6.6+ "rem"
                });
                $this.children().eq(currentIndex+1).animate({
                    "font-size":"2rem"
                });
                $this.children().eq(currentIndex).animate({
                    "font-size":"1rem"
                });
            }
            if(cha < 0 && (Math.abs(cha) >  CONTSTANT.ew)){
                //next
                $this.find(".active").removeClass('active');

                 var currentIndex =  settings.currentIndex;
                if(currentIndex >= settings.data.length){currentIndex=settings.data.length-1}
                 $this.addClass("trans").css({
                     "margin-left": - (currentIndex)*6.6+ "rem"
                 });
                 $this.children().eq(currentIndex).animate({
                     "font-size":"1rem"
                 });
                 $this.children().eq(currentIndex+1).animate({
                     "font-size":"2rem"
                 }).addClass("active");

                 settings.currentIndex = currentIndex + 1;

             }
            if(cha < 0 && (Math.abs(cha) <  CONTSTANT.ew)){
                //next
                var currentIndex =  settings.currentIndex;
                $this.addClass("trans").css({
                    "margin-left": - (settings.currentIndex-1)*6.6+ "rem"
                });
                $this.children().eq(currentIndex+1).animate({
                    "font-size":"1rem"
                });
                $this.children().eq(currentIndex).animate({
                    "font-size":"2rem"
                });

            }
        });
    }
})(Zepto)