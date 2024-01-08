$("h1").css("color", "red");
/*You should carefull when you are adding both jQuery tag and JavaScrpt tag in head section in html because whta might happen is before we have actually finished loading up the entire jQuery library, our index.js might already be trying to access it so one of the way you can safeguard against this is to check whether our jQuery library is ready and we do that in this way:
$(document).ready(function(){
    $("h1").css("color", "red");
});
that means that once our document is ready then its going to call a function */ 