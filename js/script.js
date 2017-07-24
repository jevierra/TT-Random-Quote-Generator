

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/* -------------------   {2} Create a function named getRandomQuote which: ----------------------------------
	 •	selects a random quote object from the quotes array
	 •	returns the randomly selected quote object 
				
				# - (Completed) - #
-------------------------------------------------------------------------------------------------------------*/

function getRandomQuote(){
var rnum = Math.floor(Math.random() * quotes.length) ;

return quotes[rnum]

}

/* -----------  Generate an RGB color based on 256 possible colors (When the quote changes, randomly change the background color of the page.)  ----------  # - (Completed) - #    */

function getRandomColor() {
	var color = 'rgb(';
	color += Math.floor(Math.random() * 256) + ',';
	color += Math.floor(Math.random() * 256) + ',';
	color += Math.floor(Math.random() * 256) + ')';
	document.body.style.backgroundColor = color;
	document.getElementById('loadQuote').style.backgroundColor = color;
}



/* ---------- {3} Create a function named printQuote which follows these rules: ------------------------------------------                   
	
	•	printQuote calls the getRandomQuote function and stores the returned quote object in a variable # - (Completed) - #
	•	printQuote constructs a string containing the different properties of the quote object using the following HTML template: (Completed)
    •	printQuote doesn't add a for a missing citation or a if the year property is missing (Completed)
	•	printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that: document.getElementById('quote-box').innerHTML (Completed)

	
 ----------------------------------------------------------------------------------------------------------------------   */


/*
function printQuote(){
var co = getRandomQuote();

var quote = '<p class="quote">' + co.quote + '</p>' 
var source = '<span class="source">' + co.source + '</span>' 
var citation = '<span class="citation">' + co.citation + '</span>' 
var tag = '<span class="tag">' + co.tag + '</span>' 
var year = '<span class="year">' + co.year + '</span>' 

if(co.source){ quote+= '<span class="source">' + co.source + '</span>' }

var totalQuote = quote += source += citation += tag += year;

getRandomColor();

return document.getElementById('quote-box').innerHTML = totalQuote ;

}
*/

/* New revision of the printQuote function to fix my printQuote doesn't add a for a missing citation or a if the year property is missing (Completed)
Issue */

function printQuote() {

var co = getRandomQuote(); 

  var totalQuote = '<p class="quote">' + co.quote + '</p>';
	 
	 if(co.source)
	 	{ totalQuote += '<span class="source">' + co.source + '</span>';}
     
     if(co.citation)
     	{totalQuote += '<span class="citation">' + co.citation + '</span>';}

     if(co.tag)
     	{totalQuote += '<span class="tag">' + co.tag + '</span>';}
 
     if(co.year)
     	{totalQuote += '<span class="year">' + co.year + '</span>';}	 

     getRandomColor();

return document.getElementById('quote-box').innerHTML = totalQuote ; 

}


/* 
Exceed stuff
Don't display a random quote more than once until ALL quotes from the array have been displayed. To help reviewers (and yourself) verify that the quotes don’t repeat until they’ve all been displayed, 
log the quote to the console each time the “Show Another Quote” button is clicked. 
Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. 
(You can use the setInterval() or setTimeout() method to do this -- see the links in the “Additional Resources” section
*/


