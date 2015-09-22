(function($){
    var settings = {
        minDate:1,
        maxDate:36,
        initDate:6,
        onePage:3,
        currentDate:6
    };
    BROWSER_WIDTH = document.documentElement.clientWidth;
    var C = {
        cw:document.documentElement.clientWidth * 2,
        ow: document.documentElement.clientWidth / 3 * 2
    };
    $.makeSlide = {
      init:function(target){
        var cavans = target[0];
        cavans.width = document.documentElement.clientWidth * 2;
      },
      draw:function(ctx,currentDate){
          var cd = $.makeSlide.getActivePos(currentDate);
          ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
          for(var i = cd ; i<36;i++){
              ctx.textAlign = "center";
              if(i-cd == currentDate){
                  ctx.save();
                  ctx.fillStyle = "#e73c47";
                  ctx.font = "Bolder 54px arial";
                  ctx.textAlign = "center";
                  ctx.fillText(i-cd,i*C.ow,ctx.canvas.height / 2);
                  ctx.restore();
              }else{
                  ctx.save();
                  ctx.fillStyle = "#999999";
                  ctx.font = "Bold 32px arial";
                  ctx.textAlign = "center";
                  ctx.fillText(i-cd,i*C.ow,ctx.canvas.height / 2);
                  ctx.restore();
              }
          }
      },
      getActivePos:function(cd){
          return  C.cw / C.ow / 2   - cd;
      }
    };
    $.fn.makeSlide = function(){
        var $this = $(this);
        var canvas = $this[0],
            ctx = canvas.getContext('2d');
        $.makeSlide.init($this);

        $.makeSlide.draw(ctx,settings.initDate);

        canvas.addEventListener('touchstart',function(event){
            startPositionX = movePositionX = event.touches[0].pageX;
        });
        canvas.addEventListener('touchmove',function(event){
            var c = movePositionX - event.touches[0].pageX;
            var c1 = movePositionX - startPositionX;

            settings.currentDate+=c/ C.ow;
            $.makeSlide.draw(ctx,settings.currentDate);
            movePositionX = event.touches[0].pageX;
        });
        canvas.addEventListener('touchend',function(){
            $.makeSlide.draw(ctx,Math.round(settings.currentDate));
        });

    }
})(Zepto);