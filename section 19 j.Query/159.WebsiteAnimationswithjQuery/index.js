$("button").on("click", function(){
    $("h1").hide();
   // $("h1").toggle(); //it will hide h1 when I click on button and show as well when I click on button
    //    $("h1").fadeUp(); $("h1").fadeDown();   $("h1").fadeToggle();

    //we can also do this     $("h1").slideup();  //collapses our element that was selected
    //                        $("h1").slideDown();  //uncollapses our element that was selected
    //                         $("h1").slideToggle(); //it will do both

})
//$("h1").show();
/*
$("button").on("click", function(){
    $("h1").animate({opacity: 0.5});  
});
*/
/*
$("button").on("click", function(){
    $("h1").animate({margin: "20%"});  
});
*/
//important thing about animate method is that in between curly braces you can only add css rules that have a numeric value so that means you can't animate to something like color you can't change the color to red 
/*$("button").on("click", function(){
    $("h1").slideIp().slideDown().animate({opacity: 0.5});   //we have chained them together
});
*/