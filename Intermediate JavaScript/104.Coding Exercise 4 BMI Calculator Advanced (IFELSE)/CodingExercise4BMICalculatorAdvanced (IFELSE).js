/*Instructions: 
BMI Calculator Advanced (IF/ELSE)
Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.

Write a function that outputs (returns) a different message depending on the BMI.


BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."


The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.

IMPORTANT the message wording has to match precisely for the code to pass the validation. Including punctuation and capitalisation.*/


/*In programming, a function is a reusable block of code that performs a specific task or set of tasks. It is defined using the function keyword, followed by a name, parameters (if any), and a code block. Functions encapsulate a particular functionality, promoting code modularity and reusability. They accept input parameters, process them, and often return a result using the return statement. Functions are invoked or called when their functionality is needed, allowing developers to organize code into manageable and efficient units, facilitating better code maintenance and readability.*/
/*General of how it looks: 
function functionName(parameter1, parameter2) {
    // Function body: code to perform a specific task
    // ...

    // Return statement (optional)
    return result;
}

// Function call
var output = functionName(argument1, argument2);   */


function bmiCalculator (weight, height) {
    var bmi = weight / (height * height);
 
     if (bmi < 18.5) {
         return "Your BMI is " + bmi + ", so you are underweight.";
     } else if (bmi >= 18.5 && bmi <= 24.9) {
         return "Your BMI is " + bmi + ", so you have a normal weight.";
     } else if (bmi > 24.9) {
         return "Your BMI is " + bmi + ", so you are overweight.";
     }
 }