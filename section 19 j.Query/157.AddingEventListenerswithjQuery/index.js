$("h1").click(function(){
    $("h1").css("color", "purple");
});
//to change h1 color if we click button
/*
for(var i=0;i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color="purple";
    })
}
*/
//now same code to change h1 color if we click buttons but using jQuery:
$("button").click(function(){
    $("h1").css("color", "purple");
})

$("input").keypress(function(event){
    var currentKey=event.key;
    $("h1").text(currentKey);
});

//another method to addEventListeners:
$("h1").on("mouseover", function(){
    $("h1").css("color", "pink");
})
