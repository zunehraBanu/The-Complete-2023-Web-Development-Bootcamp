var  randomNumber1=Math.floor(Math.random()*6)+1;  //generate randomly 1-6 numbers
/*We are generating random number between 0 and 0.9999999 using Math.random() then we are multiplying it with a number 6 inorder to change it to between 0 and 5.99999 then we are rounding that number down to the nearest whole numberusing Math.floor so it becomes 0 to 5 and then adding 1 to make it 1 to 6 */

var rabdomDiceImage="dice" + randomNumber1 +".png"; //dice1.png-dice6.png
var randomImageSource="images/" +rabdomDiceImage; //giving Path  images/dice1.png-images/dice6.png
document.querySelector(".img1").setAttribute("src", randomImageSource);
//var image1=document.querySelectorAll("img")[0] //another way to select image 1

var randomNumber2=Math.floor(Math.random()*6)+1;  //generate randomly 1-6 numbers
var randomDiceImage2="dice" + randomNumber2 +".png";  //dice1.png-dice6.png
var randomImageSource2="images/" + randomDiceImage2;  //giving Path
//var randomImageSource2="images/dice" + randomNumber2 +".png"; //the above two lines in 1 line

document.querySelector(".img2").setAttribute("src", randomImageSource2); 
//var image2=document.querySelectorAll("img")[1] //another way to select image 2

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins 👍🏽";  //emojis from: https://emojipedia.org/
} else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw 👍🏻";
}
 else{
    document.querySelector("h1").innerHTML="Player 2 Wins 👍🏽";
}