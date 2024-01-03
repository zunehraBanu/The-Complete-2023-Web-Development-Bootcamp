/*the code takes user input for two names, generates a random love score between 1 and 100, and then displays the result in an alert message. The love score is essentially a random number meant for entertainment rather than any actual calculation based on the provided names.*/

prompt("What is your name: ");  //This line prompts the user to enter their name. The entered value is not stored or used explicitly in the code.

prompt("What is their name: "); //This line prompts the user to enter the name of the person they are interested in or want to check their love score with. Similarly, the entered value is not stored or used explicitly in the code.

var loveScore=Math.random()*100; //This line generates a random number between 0 (inclusive) and 1 (exclusive), multiplies it by 100, resulting in a random floating-point number between 0 (inclusive) and 100 (exclusive). This value is assigned to the variable loveScore.

loveScore=Math.floor(loveScore)+1;//This line rounds down the loveScore value to the nearest integer using Math.floor(), and then adds 1. This ensures that the final value of loveScore is an integer between 1 and 100 (both inclusive).

alert("Your love score is: " + loveScore); //Finally, an alert message is displayed to the user with their calculated love score. The message includes the string "Your love score is: " concatenated with the calculated loveScore value.

