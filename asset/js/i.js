(function($){
    $("body")[0].addEventListener("touchmove",function(e){
        e.preventDefault();
    });
    $("#panel").makebc();
    $("#slider").makeSlide();
    $("#profitlist").specSlider();
})(Zepto)