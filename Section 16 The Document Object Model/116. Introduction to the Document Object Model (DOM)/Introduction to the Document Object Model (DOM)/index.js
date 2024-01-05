//document     will give the entire html [including head and body]
//If we write document.firstElementChild   then it will give everything present inside html as it is a first child of the document
//If we write document.firstElementChild.firstElementChild then it will give everything present inside  html first child which is head
//If we write document.firstElementChild.lastElementChild then it will give everything present inside html last child which is body
//If we write document.firstElementChild.lastElementChild.firstElementChild then it will give everything present inside body first child which is h1 here

var heading1=document.firstElementChild.lastElementChild.firstElementChild;
heading1.innerHTML="Good Bye";
heading1.style.color="red";
document.querySelector("input").click(); //This will look into our entire document for the object that has the selector of input and click stimulates a mouse click.
var listThirdItem=document.firstElementChild.lastElementChild.lastElementChild.previousElementSibling.lastElementChild;  //The previousElementSibling property in the DOM (Document Object Model) is used to select the immediate preceding sibling element of a given element. It allows you to traverse the DOM and access the element that comes just before the specified element within the same parent.
listThirdItem.innerHTML="Banu";

/*Query Selector Explanation: 
querySelector is a method in the DOM (Document Object Model) that allows you to select and retrieve the first element that matches a specified CSS selector. It's part of the DOM API and is commonly used in JavaScript to interact with and manipulate elements on a web page.

The basic syntax of querySelector is as follows:

javascript
var element = document.querySelector(selector);
document: Refers to the entire HTML document.
querySelector: The method that selects the first element that matches the specified CSS selector.
The selector argument is a string representing a CSS selector. It can be a tag name, a class, an ID, or a more complex selector.

Here are a few examples:

Selecting by Tag Name:

javascript
var paragraph = document.querySelector('p');
Selecting by Class:

javascript
var firstDiv = document.querySelector('.myDiv');
Selecting by ID:

javascript
var mainHeader = document.querySelector('#mainHeader');
Selecting by a More Complex Selector:

javascript
var specialListItem = document.querySelector('ul li.special');
Note that querySelector returns null if no matches are found. Therefore, it's often a good practice to check if the element is found before attempting to use it:

javascript
var element = document.querySelector(selector);

if (element) {
    // Do something with the element
} else {
    // Handle the case when the element is not found
}
The power of querySelector lies in its flexibility to select elements using a wide range of CSS selectors, making it a versatile tool for interacting with the DOM in a concise and expressive manner.


*/