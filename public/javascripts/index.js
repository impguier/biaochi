$(function(){
    $.CONSTANT = {
        defaultMoney :10000,
        preMoved:0
    };
    $.tools = {};
    $.extend($.tools,{
        getPosition:function(money){
            var every = $("body").width() / 60;
            var spare = 1-(parseFloat(money/100) - Math.floor(money / 100));
            money = Math.floor(money / 100);
            var position = money.toString().substring(money.toString().length-1);
            return {
                position:position,
                spare:spare
            };
        },
        getColumnArray:function(startPosition){
        var arr = [];
        var zz = startPosition;
        var all=0;
        var startArr = [],middleArr = [],endArr = [];
        for(var i=zz;i<10;i++){
            startArr.push(i);
        }
        middleArr.push(startArr);
        for(var m=0;m<5;m++){
            var innerarr = [];
            for(var n=0;n<10;n++){
                innerarr.push(n);
            }
            middleArr.push(innerarr);
        }
        for(var z=0;z<10-zz;z++){
            endArr.push(z);
        }
        middleArr.push(endArr);

        return middleArr;

    }
    });
    var canvas = $("#panel")[0];
    var context = canvas.getContext('2d');
    var CONSTANT_SUM = 100000;
    var CONSTANT_UNIT = 100,
        times = CONSTANT_SUM / CONSTANT_UNIT;
    //绘制高低不平的那个
    function inital(){
        var actualWidth = $("body").width();
        $("#panel")[0].width = actualWidth *2;
        var screenCanDraw = actualWidth
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

    function drawRuleBiao(context,storeMoney,obj){
        var startPosition = $.tools.getPosition(storeMoney);
        var columnArray = $.tools.getColumnArray(startPosition.position);
        var moneyArrary = getMoneyArray(storeMoney);
        var allWidth = obj.allWidth;
        var initBottom = obj.initBottom;
        var every = allWidth / 60;

        var spare = startPosition.spare;
        var tem = -2+spare;
        if(startPosition.spare){

        }
       for(var i = 0;i<columnArray.length;i++){

           for(var z=0;z<columnArray[i].length;z++){
               tem++;
               var p = tem*every;
               context.save();
               context.beginPath();
               context.strokeStyle = 'rgb(211,211,211)';
               if((z % 10) ==0){
                   context.moveTo(p,initBottom);
                   context.lineTo(p,initBottom-30);
               }else{
                   context.moveTo(p,initBottom);
                   context.lineTo(p,initBottom-10);
               }
               context.stroke();
               context.closePath();
               context.restore();
               if((columnArray[i][z] % 10) ==0)
                   drawText(context,obj,p,moneyArrary[i-1]);
           }

       }

    }
    function drawText(context,obj,p,text){
        var initBottom = obj.initBottom;
        context.save();
        context.font = '1.5em Arial';
        context.textAlign = 'center';
        context.fillStyle = '#999';
        context.fillText(text,p, initBottom-30);
        context.restore();
    }
    function drawCenterLine(context,obj){
        var allWidth = obj.allWidth,initBottom = obj.initBottom;
        context.save();
        context.beginPath();
        context.strokeStyle = "#fa6458";
        context.moveTo(allWidth/2,initBottom);
        context.lineTo(allWidth/2,0);
        context.stroke();
        context.closePath();
        context.restore();
    }
    inital();
    var obj = drawRuleBorder(context);
    drawRuleBiao(context, $.CONSTANT.defaultMoney,obj);
    drawCenterLine(context,obj);
    canvas.addEventListener("touchstart",function(e){
        var touch = event.touches[0];
            startY = touch.pageY;
            startX = touch.pageX;
    });
    canvas.addEventListener("touchmove",function(e){
        var touch = event.touches[0];
            endX = touch.pageX;

        var every = 14;/*$("body").width() / 60*/ ;
        var context = $("#panel")[0].getContext("2d");
        var moved = endX - startX;
        context.clearRect(0,0,$("body").width()*2,500);

        $.CONSTANT.defaultMoney = $.CONSTANT.defaultMoney + 100;
        console.log(Math.floor(moved/every));
        console.log($.CONSTANT.defaultMoney);
       // console.log($.CONSTANT.defaultMoney);
        var obj = drawRuleBorder(context);
        drawRuleBiao(context, $.CONSTANT.defaultMoney,obj);
        drawCenterLine(context,obj);
        
        $("#money").html($.CONSTANT.defaultMoney);
    });
    canvas.addEventListener("touchend",function(e){


    });
    function getMoneyArray(money){
        var money = Math.floor(money /1000)*1000;
        return [
                parseInt(money) - 2000,
                parseInt(money) - 1000,
                parseInt(money),
                parseInt(money) + 1000,
                parseInt(money) + 2000,
                parseInt(money) + 3000
                ]
    }
})
