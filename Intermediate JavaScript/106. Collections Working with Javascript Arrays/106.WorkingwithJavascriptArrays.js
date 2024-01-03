/*This JavaScript code creates an array called names containing four names: "Ayesha," "Rubina," "Saleha," and "Shaqufta." It then prompts the user to enter their name using the prompt function and stores the entered value in the variable guestName. The code then uses the includes method to check if the entered guestName is included in the names array. If the entered name is found in the array, it displays an alert saying "Welcome." Otherwise, if the entered name is not in the array, it displays an alert saying "Sorry, you are not invited." Essentially, the code determines whether the entered name matches any of the pre-defined names in the array and provides a corresponding welcome or rejection message. */

/*An array is a fundamental data structure in programming that allows you to store and organize multiple values under a single variable name. It consists of an ordered collection of elements, where each element can be accessed using an index. Arrays provide a way to group related data together, making it easier to manage and manipulate sets of values within a program. Elements in an array are typically of the same data type, and the array size can dynamically change as elements are added or removed. For instance, in JavaScript, an array is declared using square brackets, like var numbers = [1, 2, 3, 4], creating a container that holds the values 1, 2, 3, and 4 accessible by their respective indices. */

/*The includes method in JavaScript is employed to determine if a specific element exists within an array. It returns a boolean value, true if the element is present in the array and false if it is not. This method simplifies the process of checking for the existence of a particular value within an array, and it is commonly used in conditional statements to streamline decision-making based on array content. In the provided code, includes is utilized to ascertain whether the entered guestName is part of the names array, enabling the script to deliver a personalized message depending on the invitation status of the entered name. */

var names=["Ayesha","Rubina","Saleha","Shaqufta"];
var guestName=prompt("What is your name? ");
if(names.includes(guestName)){
    alert("Welcome");
} else{
    alert("Sorry, you are not invited.");
}