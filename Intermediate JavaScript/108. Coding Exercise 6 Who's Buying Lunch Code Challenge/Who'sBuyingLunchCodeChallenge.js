/*Who's Buying Lunch? Code Challenge
You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

Example Input

["Angela", "Ben", "Jenny", "Michael", "Chloe"]
Example Output

Michael is going to buy lunch today!


Hint

1. You might need to think about Array.length.

2. Remember that Arrays start at position 0!   */

/*Math.random() in JavaScript generates a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive). It is commonly used to obtain random values for various applications, like simulations or random selections.

Math.floor() is a function in JavaScript that rounds down a floating-point number to the nearest integer. When combined with Math.random(), it can be used to generate random integers within a specific range.

Array.length is a property in JavaScript that returns the number of elements in an array. It provides a quick way to determine the size of an array, allowing for dynamic handling of arrays of different lengths in code.  */



function whosPaying(names) {
    
       if (names.length > 0) {
            // Generate a random index within the range of the names array
            var randomIndex = Math.floor(Math.random() * names.length);
    
            // Get the name at the random index
            var selectedName = names[randomIndex];
    
            // Return the formatted string
            return selectedName + " is going to buy lunch today!";
        } else {
            // If the array is empty, return a message
            return "The list of names is empty!";
        }   
    }