$("h1").before("<button>New</button>"); //it will add button before the opening tag of selected element
$("h1").after("<button>New</button>");  //after method will add new HTML element[here it is button] after the h1 closing tag
$("h1").prepend("<button>New</button>"); 
$("h1").append("<button>New</button>"); 
/*important-prepend will add your new HTML element into the item that you have selected just adter the opening tag [just before the text of h1] and append got added just after the content of h1[but before the end of h1 tag]  */
$("button").remove();//this will remove all of the buttons of our current web page