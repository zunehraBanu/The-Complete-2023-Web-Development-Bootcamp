/* jQuery is a library so a bunch of code  that somebody else wrote, that you can incorporate into your own projects and use to improve your own projects or to make your life simply a lot easier */

//we select our eleemt h1 like this in javaScript:
document.querySelector("h1");

//we can do same using jquery:
jQuery("h1")

//shorthand to write jQuery is $ sign
$("h1");

//it is alot shorter and that will make our javaScript code a lot easier to read, a lot easier to debug and a lot faster to write 

//In javascript we write code like this:
for(i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color="red";
    })
}
//but the same above we can write in short using jQuery  here is how:
$("button").click(function(){
    $("h1").css("color", "red");
})