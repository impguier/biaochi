(function($){
    var settings = {
        minDate:1,
        maxDate:36,
        initDate:6,
        onePage:5,
        currentDate:18
    };
    BROWSER_WIDTH = document.documentElement.clientWidth;
    var C = {
        cw:document.documentElement.clientWidth * 2,
        ow: document.documentElement.clientWidth * 2 / 5 ,
        rootFz : null,
        ew : 4
    };
    $.makeSlide = {
      init:function(target,num){
          target.css("margin-left",-((num-1) * 4)+"rem")
          target.children("li").eq(num+1).css({
             "font-size":'2rem'
          }).addClass("active");
          window.onload = function(){
              C.rootFz = parseFloat(document.documentElement.style.fontSize) / 100;
          }
      },
      move:function(target,num,c,c1){
        var ml = parseFloat(target.css('margin-left'));
        var currentDate = settings.currentDate;
          if(c>0){
              //left

              //target.css("margin-left",ml - C.ew +"rem");

              /*if(ml <= -((settings.maxDate -1)* 4)){
                  target.animate({
                      "margin-left":-(settings.maxDate-1) * 4+"rem"
                  },500);
              }*/
          }else{
              //right
              
          }

      },
        touchend:function($target){
            var ml = Number($target.css("margin-left").replace("rem",""));
            var ps = Math.round(ml / C.ew) ;
            $target.animate({
                "margin-left":(ps) * C.ew + "rem"
            },400,function(){
                $target.children().eq(Math.abs(ps-2)).animate({
                    "font-size":'2rem'
                },100).addClass("active");
            });

            settings.currentDate = Math.abs(ps-3);

        },
        refont:function($target){
            $target.children().each(function(){
                $(this).css("font-size","1rem").removeClass("active");
            });
        }
    };
    $.fn.makeSlide = function(){
        var $this = $(this);
        var initTime = 0;
        $.makeSlide.init($this,settings.currentDate);

        this[0].addEventListener('touchstart',function(event){
            startPositionX = movePositionX = event.touches[0].pageX;
            initTime = new Date().getTime();
            $.makeSlide.refont($(this));
        });
        this[0].addEventListener('touchmove',function(event){
            event.preventDefault();
            var c = movePositionX - event.touches[0].pageX;
            var c1 = movePositionX - startPositionX;
            $.makeSlide.move($this,settings.currentDate,c,c1);
            movePositionX = event.touches[0].pageX;
        });
        this[0].addEventListener('touchend',function(){
            var $target =  $(this);
            var endTime = new Date().getTime();
            var time = endTime - initTime ;
            if (time < 500) {
                var i = Math.round(Math.round(movePositionX - startPositionX) / C.ow);
                var ml = parseFloat($this.css('margin-left'));
                var moveMl = ml+i*4 ;
                if(moveMl > 0){
                    moveMl = 0 ;
                }
                if(moveMl < -((settings.maxDate -1)* 4)){
                    moveMl = (settings.maxDate -1)* 4 ;
                }
                $this.animate({
                    "marginLeft":moveMl+ "rem"
                },400,function(){
                    $.makeSlide.touchend($this);
                });


            }else{
                if(movePositionX - startPositionX > 0){
                    settings.currentDate +=1;
                }else{
                    settings.currentDate -=1;
                }

            }
        });

    }
})(Zepto);