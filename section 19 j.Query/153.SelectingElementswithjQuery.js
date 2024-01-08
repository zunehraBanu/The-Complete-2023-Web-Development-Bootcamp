document.querySelector("h1");
//we can achieve the above by writing the below code aswell:
$("h1");

//this works very similar to querySelector in the sense that iside the parenthesis we are specifying the CSS selector that we would use if we were to select our element in CSS and this is because it's the most flexible, the most adaptable, and also can be very specific 
$("h1.title")  //it means we are selecting h1 with a classs of title
$("#header h1") //it means we are selecting h1 that nested inside a div with the id of header

//To select all button we write this code in javaScript:
document.querySelectorAll("button");

//but we can just simply write using jQuery library like this:
$("button");   //there is no difference in selecting one or selecting many