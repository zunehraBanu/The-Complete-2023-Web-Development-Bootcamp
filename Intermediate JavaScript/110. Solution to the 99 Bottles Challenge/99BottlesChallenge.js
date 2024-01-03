/*The below JavaScript code represents a simple program that outputs the lyrics of the classic "99 Bottles of Juice" song. The while loop is used to iterate through the verses, starting with 99 bottles and continuing until there are none left. Inside the loop, the code dynamically selects between the words "bottle" and "bottles" based on the current value of numberOfBottles. It then logs the current verse to the console, including the number of bottles on the wall, the action of taking one down, and the updated count of bottles on the wall. The loop decrements numberOfBottles with each iteration until it reaches zero, completing the song's lyrics. */

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of juice on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of juice,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of juice on the wall.");
}