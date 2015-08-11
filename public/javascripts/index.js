$(function(){
    var canvas = $("#panel")[0];
    var context = canvas.getContext('2d');
    var CONSTANT_SUM = 100000;
    var CONSTANT_UNIT = 100,
        times = CONSTANT_SUM / CONSTANT_UNIT;
    //绘制高低不平的那个
    function inital(){
        var actualWidth = $("body").width();
        $("#panel")[0].width = actualWidth *2;
    }
    function drawRuleBorder(context){
        var initBottom = $("#panel").height();
        var allWidth = $(canvas).width()*2;
        context.strokeStyle = "#999";
        context.moveTo(0,initBottom);
        context.lineTo(allWidth,initBottom);
        context.stroke();
        return {
            initBottom:initBottom,
            allWidth:allWidth
        }
    }
    function drawRuleBiao(context,unit,times,obj){
        var initBottom = obj.initBottom,
            allWidth = obj.allWidth;
        var pre = 100;
        for(var i= 0,ln = times;i<ln;i++){
            context.strokeStyle = "#999";
            context.lineWidth = 1;
            context.moveTo(pre+10*i,initBottom);

            if(i%10 ==0){
                context.lineTo(pre+10*i,initBottom-40);

                if((i*unit)%1000 ==0){
                    context.save();
                    context.font = '1em Arial';
                    context.fillStyle = '#999';
                    context.fillText((i*unit),pre+10*i-20, initBottom-50);
                    context.restore();
                }
            }else{
                context.lineTo(pre+10*i,initBottom-20);
            }

            context.stroke();
        }

    }
    function drawText(){

    }
    inital();
    var obj = drawRuleBorder(context);
    drawRuleBiao(context,CONSTANT_UNIT,times,obj)

})