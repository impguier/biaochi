(function($){
    var settings = {
        minDate:1,
        maxDate:36,
        initDate:6,
        onePage:5,
        currentDate:18,
        cindex:null
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
          settings.cindex = num+1;
          $("#lenddate").val(settings.cindex-1).trigger("change");
          var clientWidth = document.documentElement > 640 ?640:docEle.clientWidth;
          var size = clientWidth/320;
          C.rootFz = size;
      },
      move:function(target,num,c,c1){
        var ml = parseFloat(target.css('margin-left'));
        var index = settings.cindex;
        var rootFz = parseFloat(document.documentElement.style.fontSize)/100;
        var $list = target.children();
        var a = parseFloat(Math.abs((c1)/16* rootFz * ( 1 / 6.6 )));
          var $op = $list.eq(index);
          target.css({
              "margin-left":  ml -( c / 16 * rootFz )+ "rem"
          });
          $op.css({
              "font-size":2 - (a>=1?1:a)+"rem"
          });
          if(c > 0){
              if(c==0)return;
              $op.next().css({
                  "font-size":1 + (a>=1?1:a) +"rem"
              });
              console.log( $op.next().text())
          }else{
              if(c==0)return;
              $op.prev().css({
                  "font-size":1 + (a>=1?1:a)+"rem"
              });
              console.log( $op.prev().text())
          }

      },
        touchend:function($target){
            var ml = Number($target.css("margin-left").replace("rem",""));
            var ps = Math.round(ml / C.ew) ;
            $target.css({
                "margin-left":(ps) * C.ew + "rem"
            });
            $target.children().eq(Math.abs(ps-2)).animate({
                "font-size":'2rem'
            },100).addClass("active");
            settings.currentDate = Math.abs(ps-3);
            settings.cindex = Math.abs(ps-2);
            $("#lenddate").val(settings.cindex-1).trigger("change");
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
            //$.makeSlide.refont($(this));
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
            var $this = $target;
            var cha = (movePositionX - startPositionX)/16* C.rootFz;
            var endTime = new Date().getTime();
            var time = endTime - initTime ;
            if (time < 300) {
                $this.find(".active").removeClass('active');
                $this.children().css("font-size","1rem");
                var i = Math.round(Math.round(movePositionX - startPositionX) / 16 * C.rootFz);
                var ml = parseFloat($this.css('margin-left'));
                var moveMl = ml+i*4 ;
                if(moveMl > 0){
                    moveMl = 0 ;
                }
                if(moveMl < -((settings.maxDate -1)* 4)){
                    moveMl = -(settings.maxDate -1)* 4 ;
                }
                $this.animate({
                    "marginLeft":moveMl+ "rem"
                },400,function(){
                    $.makeSlide.touchend($this);
                });


            }else{
                if(cha > 0 && (Math.abs(cha) >  C.ew)){
                    //prev
                    console.log("ca")
                    
                    $this.find(".active").removeClass('active');
                    var currentIndex = settings.cindex-1;
                    if(currentIndex < 1){currentIndex=1}
                    $this.addClass("trans").css({
                        "margin-left": - (currentIndex-2)*4+ "rem"
                    });
                    $this.children().eq(currentIndex).animate({
                        "font-size":"2rem"
                    }).addClass("active");
                    $this.children().eq(currentIndex-1).animate({
                        "font-size":"1rem"
                    });
                    settings.cindex = currentIndex;
                    $("#lenddate").val(settings.cindex-1).trigger("change");
                }
                if(cha > 0 && (Math.abs(cha) <  C.ew)){
                    //prev
                    
                    var currentIndex = settings.cindex - 1 ;
                    $this.addClass("trans").css({
                        "margin-left": - (currentIndex-1)*4+ "rem"
                    });
                    $this.children().eq(currentIndex+1).animate({
                        "font-size":"2rem"
                    });
                    $this.children().eq(currentIndex).animate({
                        "font-size":"1rem"
                    });
                }
                if(cha < 0 && (Math.abs(cha) >  C.ew)){
                    //next
                    console.log("ca")
                    
                    $this.find(".active").removeClass('active');

                    var currentIndex =  settings.cindex ;
                    if(currentIndex >= 35){currentIndex=35}
                    $this.addClass("trans").css({
                        "margin-left": - (currentIndex-1)*4+ "rem"
                    });
                    $this.children().eq(currentIndex).animate({
                        "font-size":"1rem"
                    });
                    $this.children().eq(currentIndex+1).animate({
                        "font-size":"2rem"
                    }).addClass("active");

                    settings.cindex = currentIndex + 1;
                    $("#lenddate").val(settings.cindex-1).trigger("change");
                }
                if(cha < 0 && (Math.abs(cha) <  C.ew)){
                    //next

                    var currentIndex =  settings.cindex;
                    $this.addClass("trans").css({
                        "margin-left": - (settings.cindex-2)*4+ "rem"
                    });
                    $this.children().eq(currentIndex+1).animate({
                        "font-size":"1rem"
                    });
                    $this.children().eq(currentIndex).animate({
                        "font-size":"2rem"
                    });

                }

            }
        });
        $("#lenddate").change(function(){
            calculateProfit();
        });
    }
    window.onload = function(){
        C.rootFz = parseFloat(document.documentElement.style.fontSize) / 100;
    }
})(Zepto);
