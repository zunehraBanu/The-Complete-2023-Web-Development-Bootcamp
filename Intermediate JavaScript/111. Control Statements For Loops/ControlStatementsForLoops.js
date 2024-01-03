/*A for loop is a control flow structure in programming that allows a block of code to be repeatedly executed for a specified number of iterations. It typically consists of three parts within parentheses: an initialization statement, a condition that, when true, continues the loop, and an update statement that is executed after each iteration. The loop iterates as long as the condition is true, and the initialization and update statements are responsible for managing the loop variable, which often controls the loop's behavior. The for loop provides a concise and organized way to handle repetitive tasks, making it widely used for iterating through arrays, sequences, or a predetermined number of times.
*/

/*The primary difference between a while loop and a for loop lies in their syntax and structure, while their functionality in terms of iteration remains similar. In a while loop, you specify the loop condition at the beginning, and the loop continues executing as long as that condition is true. The initialization and update of loop variables are handled outside the loop. On the other hand, a for loop incorporates the initialization, condition, and update statements within its parentheses, providing a more concise structure. Both loops can achieve the same iteration results, but for loops are often preferred when the number of iterations is known in advance or when dealing with well-defined sequences, while while loops are more suitable for scenarios where the termination condition is determined during the loop's execution.
*/

var output=[];

function fizzBuzz(){
    for(var count=1; count<=100;  count++){
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
   
}
console.log(output);
}