(function(){
    var settings = {
        minMoney:1000,
        MAxMoney:'',
       initMoney:109255,
      printpanel:"#panel",
        inputDom:"#money"
    };
    var BROWSER_WIDTH = window.innerWidth;
    var V = {
        ew : (BROWSER_WIDTH / 60 )* 2,
        em : 100 / BROWSER_WIDTH / 60 * 2
    };
    $.fn.makebc = function(opts){
        var opts = $.extend(settings,opts);
        var ctx  = $(opts.printpanel)[0].getContext('2d');
        var methods = {
            money2position:function(money){
                var a = money / 100,b = a %10 ;
                b = b>1?(b-parseInt(b)):b;
                console.log(b);
                return b;
            },
            draw:function(sX,sY){

                ctx.strokeStyle = "rgb(0,0,0)";
                var curMoney = $(opts.inputDom).val();
                var startMoney = curMoney - 3000;
                for(var i=sX;i<BROWSER_WIDTH *2 / (V.ew);i++){
                   ctx.beginPath();
                   ctx.moveTo(V.ew * i , sY );
                    console.log(i);
                    
                    //console.log(V.ew * i)
                    if(Math.floor(((startMoney + i * 100) /100) % 10) ==0){
                        ctx.lineTo(V.ew * i , sY - 20);
                    }else{
                        ctx.lineTo(V.ew * i , sY - 10);
                    }
                    ctx.stroke();
                    ctx.closePath();
                    if(Math.floor(((startMoney + i * 100) /100) % 10) ==0){
                    methods.drawText(Math.floor((startMoney + i * 100) /100)*100,sX + V.ew * i,sY - 30 );}
                }

            },
            drawCenter:function(){
              ctx.save()
              ctx.beginPath();
              ctx.strokeStyle = 'red';
              ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height);
              ctx.lineTo(ctx.canvas.width / 2, 0);
              ctx.stroke();
              ctx.closePath();
              ctx.restore();
            },
            drawText:function(text, x, y){
                ctx.save();
                ctx.beginPath();
                ctx.font = '1.2rem Microsoft Yahei';
                ctx.textAlign = 'center';
                ctx.fillStyle = 'rgb(211,211,211)';
                ctx.fillText(text,x,y);
                ctx.closePath();
                ctx.restore();
            }


        };

        this.each(function(){
           init(opts);
            var canvas = this;
            var sX  = methods.money2position(opts.initMoney),
                sY  = canvas.height;
            
            methods.draw(sX,sY);
            methods.drawCenter();
           this.addEventListener('touchstart',function(){

           });
           this.addEventListener('touchmove',function(){

           });
           this.addEventListener('touchend',function(){

           });
        });
        function init(opts){
            $(opts.printpanel)[0].width = BROWSER_WIDTH*2;
            $(opts.inputDom).val(opts.initMoney).change(function(){
                var canvas = $(opts.printpanel)[0];
                var ctx    = canvas.getContext('2d');
                var idom   = $(this);
                var startX = methods.money2position(idom.val());
                ctx.clearRect(0,0,canvas.width,canvas.height);
                methods.draw(startX,canvas.height);
                methods.drawCenter();
            });
        }
    }

})(Zepto)