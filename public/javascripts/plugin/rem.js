(function($){
    var sreenWidth = window.innerWidth,
      screenHeight = window.innerHeight;
    var radio = sreenWidth / 320 * 16;
    document.documentElement.style.fontSize = radio + "px";
})(Zepto)