// global $ , jQuery, alert
$(document).ready(function (){

    // "use strict";
    // $("html").niceScroll();


var scrollBtn = $("#scroll-top")
$(window).on("scroll",function (){
    console.log($(this).scrollTop());

$(this).scrollTop()>=700 ? scrollBtn.show(): scrollBtn.hide();

scrollBtn.click(function(){
    $("html,body").stop().animate({scrollTop:0},300);
});
});
});

// show color option Div when click on the gear 
// $(".gear-check").click(function(){
//     $(".color-option").toggle();
// })

// Change themes color on click
var colorLi = $(".color-option ul li");

colorLi
    .eq(0).css("backgroundColor","#d31103").end()
    .eq(1).css("backgroundColor","#2a09e2").end()
    .eq(2).css("backgroundColor","#11f0f0").end()
    .eq(3).css("backgroundColor","#e6e931").end()
    .eq(4).css("backgroundColor","#990bdb");

colorLi.click(function (){
    console.log($(this).attr("data-value"))
    $("link[href*='themes']").attr("href",$(this).attr("data-value"));
})


$(window).load(function(){
//Loading Element
$(".loading-overlay .loader").fadeOut(1000,function () {
    $("body").css("overflow","auto");
    $(this).parent().fadeOut(1000)
        // function() {
        // //Show The Scroll
        
        
        // $(this).remove();
    // }); 
});
})




