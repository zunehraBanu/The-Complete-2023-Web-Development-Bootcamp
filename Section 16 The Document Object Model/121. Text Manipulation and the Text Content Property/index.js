/* Important difference between innerHTML and 
if you are write innerHTML then it will give you all of the HTML inside that elemnts tag, including any other HTML tags 
if you use innerHTML, you can also add HTML code on the fly.
we can use this when we wanted our content to not only change its text but also wanted that word to be emphasized to be italicized effectively then we can do:
" */
document.querySelector("h1").innerHTML="<em>Good Bye</em>";  //it goes inside the h1  remember when you are writing code like this the HTML also has to go into quotation marks, because the value has to be string because otherwise it is going to think it is javScript code