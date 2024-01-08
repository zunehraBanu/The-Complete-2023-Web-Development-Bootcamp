//   $("h1").css("color", "green");
//     console.log($("h1").css("color"));//It will give you the current value of the CSS property by simply having the name of the property in quotation mark as a string inside the method 
//   console.log($("h1").css("font-size")); //it will give font size

//Important remember with this method that if you have a single property in it then you are getting the value of it and if you have properties in it then you are setting the value

/*The above is to change color using JavaScript but it is better to keep styling things in CSS */
$("h1").addClass("big-title");
$("h1").addClass("margin-50");
//we can achieve the above two code line in one line because we are adding two classes to the same element so we can just give a space between them and add them like this : $("h1").addClass("big-title margin-50");
$("h1").removeClass("margin-50");  //it will remove margin-50 class from h1
//we can also check whether the class is there or not :
$("h1").hasClass("margin-50"); //it will give true or false depending whether or not the element does indeed have the class applied   here it is false
