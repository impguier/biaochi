(function(){
    var settings = {
        minMoney:1000,
        currMoney:0,
        MAxMoney:'',
        initMoney:90000,
        printpanel:"#panel",
        inputDom:"#money",
        setStroeMonen:function(m){
            this.currMoney = m
        }
    };
    var BROWSER_WIDTH = window.innerWidth;
    var CANVAS_HEIGHT =  0 ;
    var V = {
        ew : (BROWSER_WIDTH / 60 )* 2,
        em : 100 / BROWSER_WIDTH / 60 * 2
    };
    $.fn.makebc = function(opts){
        var opts = $.extend(settings,opts);
        opts.currMoney = opts.initMoney;
        var ctx  = $(opts.printpanel)[0].getContext('2d');
        CANVAS_HEIGHT =  ctx.canvas.height;
        var methods = {
            money2position:function(money){
                var a = money / 100,b = a % 10 ;
                b = b - parseInt(b);
                return (1-b);
            },
            draw:function(sX,sY,m){
                ctx.strokeStyle = "rgb(211,211,211)";
                var curMoney = m;
                var startMoney = curMoney - 3000;
                console.log(sX);
                for(var i=sX;i<BROWSER_WIDTH *2 / (V.ew);i++){
                    ctx.beginPath();
                    ctx.moveTo(V.ew * i , sY );
                    if(Math.floor(((startMoney + i * 100) /100) % 10) ==0){
                        ctx.lineTo(V.ew * i , sY - CANVAS_HEIGHT *.25);
                    }else{
                        ctx.lineTo(V.ew * i , sY - CANVAS_HEIGHT *.1);
                    }
                    ctx.stroke();
                    ctx.closePath();
                    if(Math.floor(((startMoney + i * 100) /100) % 10) ==0){
                        methods.drawText(Math.floor((startMoney + i * 100) /100)*100, V.ew * i,sY - CANVAS_HEIGHT *.35 );}
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
                ctx.font = '1.2rem HelveticaNeue-Bold, SimHei, Arial';
                ctx.textAlign = 'center';
                ctx.fillStyle = 'rgb(200,200,200)';
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

            methods.draw(sX,sY,opts.currMoney);
            methods.drawCenter();
            this.addEventListener('touchstart',function(event){
                startPositionX = movePositionX = event.touches[0].pageX;
                var currMoney = opts.currMoney;
                var sX  = methods.money2position(currMoney),
                    sY  = canvas.height;
                ctx.clearRect(0,0,canvas.width,canvas.height);
                methods.draw(sX,sY,currMoney);
                methods.drawCenter();
            });
            this.addEventListener('touchmove',function(event){

                // movePositionX - event.touches[0].pageX
                var c = movePositionX - startPositionX;
                var boo = c <= 0 ?1:-1;
                var moved = 0;

                if( movePositionX - startPositionX < BROWSER_WIDTH * .35){
                    moved = Math.abs(Math.round(2*(movePositionX - startPositionX) / V.ew) * 100) * boo;
                    var om = Math.abs((2*(movePositionX - startPositionX) / V.ew) * 100) * boo;
                    var $dom = $(opts.inputDom);
                    $dom.val(opts.currMoney + moved);

                    var sX  = methods.money2position(opts.currMoney + om),
                        sY  = canvas.height;
                    // console.log(sX);
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    methods.draw(sX,sY,Math.floor(opts.currMoney + om));
                    methods.drawCenter();
                    // }
                }else{

                }
                // $(opts.inputDom).val(parseInt(opts.currMoney )+ moved);
                movePositionX = event.touches[0].pageX;

            });
            this.addEventListener('touchend',function(){
                opts.setStroeMonen(parseInt($(opts.inputDom).val()));
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
                methods.draw(startX,canvas.height,opts.currMoney);
                methods.drawCenter();
            });
        }
    }

})(Zepto)