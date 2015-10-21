(function($){
    $("body")[0].addEventListener("touchmove",function(e){
        e.preventDefault();
    });
    $("#panel").makebc();
    $("#slider").makeSlide();
    $("#profitlist").specSlider();

})(Zepto)
function calculateProfit(){
    var m = Number($("#money").val()),
        d = Number($("#lenddate").val()),
        r = Number($("#rate").val());
    var result = ((m  * (parseInt(r) / 100) *(d/12)) + m).toFixed(2);
    $("#result").html(result);
}