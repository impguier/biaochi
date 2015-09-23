(function($){
    var settings = {
        minDate:1,
        maxDate:36,
        initDate:6,
        onePage:5,
        currentDate:36
    };
    BROWSER_WIDTH = document.documentElement.clientWidth;
    var C = {
        cw:document.documentElement.clientWidth * 2,
        ow: document.documentElement.clientWidth / 5 * 2,
        rootFz : null
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
        var $childrens = target.children("li"),
            $preve = $childrens.eq(num-1),
            $this = $childrens.eq(num),
            $next = $childrens.eq(num+1),
            ml = parseFloat(target.css('margin-left'));

          if(c>0){
              //left
              target.css("margin-left",ml -(c / 16 * C.rootFz) +"rem");

              if(ml <= -((settings.maxDate -1)* 4)){
                  target.animate({
                      "margin-left":-(settings.maxDate-1) * 4+"rem"
                  },500);
              }
          }else{
              //right
              target.css("margin-left",ml - (c / 16 * C.rootFz) +"rem");

              if(ml > 0){
                  target.animate({
                      "margin-left":"0rem"
                  },500);
              }
          }

      },
        touchend:function($target){
            var ml = parseFloat($target.css("margin-left"));
            var num = Math.abs(Math.floor( ml / 4));
            $target.find(".active").removeClass('active');
            $target.css({
                'margin-left':- num * 4+"rem"
            }).children("li").eq(num+2).animate({
                "font-size":'2rem'
            },500).addClass("active").siblings("li").css('font-size','1rem');
            settings.currentDate = num+1;
        },
        refont:function($target){
            var index = settings.currentDate;
            var ln = $target.children().length;
            var oneFont = 1.5 / index;
            for(var i=0;i<index;i++){
                $target.children().eq(i).css({
                    "font-size":oneFont * i + "rem"
                });
            }
            console.log(index);
            for(var x = ln;x > index;x--){
                $target.children().eq(x).css({
                    "font-size":oneFont * x + "rem"
                });
                console.log(x);
            }
        }
    };
    $.fn.makeSlide = function(){
        var $this = $(this);
        $.makeSlide.init($this,settings.currentDate);

        this[0].addEventListener('touchstart',function(event){
            startPositionX = movePositionX = event.touches[0].pageX;
        });
        this[0].addEventListener('touchmove',function(event){
            event.preventDefault();
            var c = movePositionX - event.touches[0].pageX;
            var c1 = movePositionX - startPositionX;
            $.makeSlide.move($this,settings.currentDate,c,c1);
            movePositionX = event.touches[0].pageX;
        });
        this[0].addEventListener('touchend',function(){
            $.makeSlide.touchend($this);
        });

    }
})(Zepto);