/*this code generates a random love score between 1 and 100, then displays a personalized message based on the calculated love score. If the love score is 70 or higher, it adds an extra message suggesting that the two people love each other a lot.*/


prompt("What is your name: ");  //This line prompts the user to enter their name. The entered value is not stored or used explicitly in the code.

prompt("What is their name: "); //This line prompts the user to enter the name of the person they are interested in or want to check their love score with. Similarly, the entered value is not stored or used explicitly in the code.

var loveScore=Math.random()*100; //This line generates a random number between 0 (inclusive) and 1 (exclusive), multiplies it by 100, resulting in a random floating-point number between 0 (inclusive) and 100 (exclusive). This value is assigned to the variable loveScore.

loveScore=Math.floor(loveScore)+1;//This line rounds down the loveScore value to the nearest integer using Math.floor(), and then adds 1. This ensures that the final value of loveScore is an integer between 1 and 100 (both inclusive).


//The conditional statement checks the value of loveScore:
if(loveScore>=70){   
    alert("Your love score is: " + loveScore + "% You love each other a lot.");
} else{
    alert("Your love score is: " + loveScore + "%");
}

//Explanation of Conditional statements: 
/*The if statement begins with the keyword if followed by a condition inside parentheses. In this case, the condition is loveScore >= 70. This condition checks if the value of loveScore is greater than or equal to 70.

If the condition is true, the code block inside the curly braces {} immediately after the if statement is executed. In this case, it displays an alert message indicating a high love score: "Your love score is: " + loveScore + "% You love each other a lot."

If the condition is false, the code block inside the else statement is executed. The else statement provides an alternative set of instructions to be carried out when the initial condition is not met. In this case, it displays a different alert message: "Your love score is: " + loveScore + "%"*/