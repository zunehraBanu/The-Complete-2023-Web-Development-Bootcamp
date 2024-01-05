var name=document.getElementsByTagName("li"); //it will give you an array so you also need to say which element of array. exampl is below
var thirdElement=document.getElementsByTagName("li")[2].style.color="purple";

var length=document.getElementsByTagName("li").length; //it will give the length of the li
var button=document.getElementsByClassName("btn")[0].style.color="Green"; //even if there is only one item that has that particular class that you are selecting, you still have to select the first item using the square brackets using the index 0.

var heading1=document.getElementById("title").innerHTML="Good Bye"; //we are able to select without brackets like above because id is unique for every elements  in the name as well you can see it say getElement[singular] not getElemts[plural] like above.
var listItemFirst=document.querySelector("#list a").style.color="pink";

/*In query selector we can combine our selectors 
document.querySelector("li a")  //it will select the link that is present inside list and here there is space between selectors because anchor element is inside list element [child of list].
document.querySelector("#list a") //it will select the link that is present inside list
document.querySelector("li.item") //wehn u are combining selectors so things that occur in same element, then they are no spaces and it will select first item with a class of item present inside list

what if your selector matches more that one object?  See below to know about it
document.querySelector("#list .item") //It will select only first item in the document that satisfies that selector.
Now, what if you want all of the objects that match the selector? we can use querySelectorAll to achieve this
document.querySelectorAll("#list .item") //it will give the list of the items that satisfies that selector , it will be an array.
document.querySelectorAll("#list .item")[2].style.color="Purple" ;   */