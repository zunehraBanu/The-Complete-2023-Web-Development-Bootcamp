/*The while loop is a control flow structure in programming that repeatedly executes a block of code as long as a specified condition is true. It consists of the keyword while followed by a condition in parentheses. The code inside the loop is executed iteratively until the condition becomes false. It is essential to ensure that the condition eventually becomes false to prevent an infinite loop. In below code, the while loop is used to repeatedly apply the FizzBuzz logic to numbers from 1 to 100, updating the output array with the results, and incrementing the count variable until the specified condition (count <= 100) is no longer met.  */

/*Example:
var count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
This loop will print the numbers 1 through 5 because the condition count <= 5 is true initially, and the loop continues until count is no longer less than or equal to 5. */


var output=[];
var count=1;
function fizzBuzz(){
    while(count<=100){
    if(count%3==0 && count%5==0){
        output.push("FizzBuzz");
    }
    else if(count%3==0){
        output.push("Fizz");
    } else if(count%5==0){
        output.push("Buzz")
    } else{
        output.push(count);
    }
    count++;
}
console.log(output);
}