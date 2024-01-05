document.querySelector(".btn").classList.add("pink");  //It will add class to button
document.querySelector(".btn").classList.remove("pink"); //It will remove class of pink from button
//document.querySelector(".btn").classList.toggle("pink"); //toggle simply means that if the class pink is already applied then remove it and if it is not applied then apply it.

document.querySelector("h1").classList.add("huge");

/*Notes for classList: 
classList is a property of the DOM (Document Object Model) that provides an interface for interacting with the classes of an HTML element. It allows you to add, remove, toggle, and check for the presence of CSS classes on an element.

The classList property returns a live DOMTokenList collection, which represents the classes of an element as a list of tokens (strings). Here are the main methods provided by classList:

add(className1, className2, ...):
Adds one or more class names to the element. If the class already exists, it won't be duplicated.
javascript
var element = document.getElementById("myElement");
element.classList.add("newClass");

remove(className1, className2, ...):
Removes one or more class names from the element.
javascript
var element = document.getElementById("myElement");
element.classList.remove("existingClass");

toggle(className, force):
Toggles the presence of a class. If the class exists, it is removed; if it doesn't exist, it is added. The optional force parameter is a boolean. If force is true, the class is added; if false, the class is removed.
javascript
var element = document.getElementById("myElement");
element.classList.toggle("active");

contains(className):
Checks if the element has a specific class. Returns a boolean.
javascript
var element = document.getElementById("myElement");
if (element.classList.contains("highlight")) {
    // The class "highlight" is present
}

item(index):
Returns the class name at the specified index. This is useful if you want to access a specific class in the list.
javascript
var element = document.getElementById("myElement");
var firstClass = element.classList.item(0);

length:
Returns the number of classes for the element.
javascript
var element = document.getElementById("myElement");
var numberOfClasses = element.classList.length;
Using classList is particularly handy when you need to dynamically manipulate the classes of an element in response to user actions or other events in your JavaScript code. It provides a clean and convenient way to work with class names without directly manipulating the className property, which is just a string.
*/