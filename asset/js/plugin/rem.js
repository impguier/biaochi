///define(function(require,exports,module){

    var docEle = document.documentElement,
        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function(){
            var clientWidth = docEle.clientWidth > 640 ?640:docEle.clientWidth;
            if(!clientWidth)return;
            docEle.style.fontSize = 100 *  (clientWidth/320) + '%';

           // exports.rootFz = 100 *  (clientWidth/320) + '%';
        };
    //if(!document.addEventListener) return;
    window.addEventListener(resizeEvent,recalc,false);
    window.addEventListener("load",recalc,false);

//});