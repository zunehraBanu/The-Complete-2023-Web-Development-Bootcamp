/*Important-
when you are trying to change the CSS style, you will find that that the property names don't look quite the same as what you see in CSS. So, for example we might have things like font size, which is font-size as the property name in CSS, but if you try to change it using JavaScript, the the propert is going to be Camel cased like fontSize. */
/*The other thing is that the values that you are going to set it to have to be represented as strings even if it is number. */
var h1=document.querySelector("h1").style.fontSize="5rem"; 
var button=document.querySelector(".btn").style.backgroundColor="Yellow";
//Useful link for properties: https://www.w3schools.com/jsref/dom_obj_style.asp
