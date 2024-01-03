/*This JavaScript code defines a function called fizzBuzz and initializes an empty array named output and a variable count with an initial value of 1. The purpose of the fizzBuzz function is to apply the rules of the FizzBuzz game to the current value of count and push the corresponding result into the output array. In the FizzBuzz game, if a number is divisible by 3, "Fizz" is pushed to the array; if it's divisible by 5, "Buzz" is pushed; if it's divisible by both 3 and 5, "FizzBuzz" is pushed; otherwise, the current number is pushed. After each iteration, the count is incremented. The actual FizzBuzz sequence can be obtained by calling this function multiple times. The array output will contain the FizzBuzz results based on the rules defined within the function. */

/*In JavaScript, the push method is used with arrays to append elements to the end of the array. It modifies the original array by adding one or more elements and returns the updated length of the array. */

var output=[];
var count=1;
function fizzBuzz(){
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
    console.log(output);
}