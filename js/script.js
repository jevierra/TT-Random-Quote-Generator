

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*  Create a function named getRandomQuote which:
	 •	selects a random quote object from the quotes array
	 •	returns the randomly selected quote object
*/

function getRandomQuote(){
var rnum = Math.floor(Math.random() * quotes.length) +1 ;

return quotes[rnum]

}

function getRandomColor() {
	var color = 'rgb(';
	color += Math.floor(Math.random() * 256) + ',';
	color += Math.floor(Math.random() * 256) + ',';
	color += Math.floor(Math.random() * 256) + ')';
	document.body.style.backgroundColor = color;
	document.getElementById('loadQuote').style.backgroundColor = color;
}






function printQuote(){
var co = getRandomQuote();

var quote = '<p class="quote">' + co.quote + '</p>' 
var source = '<span class="source">' + co.source + '</span>' 
var citation = '<span class="citation">' + co.citation + '</span>' 
var tag = '<span class="tag">' + co.tag + '</span>' 
var year = '<span class="year">' + co.year + '</span>' 


var totalQuote = quote += source += citation += tag += year;

getRandomColor();

return document.getElementById('quote-box').innerHTML = totalQuote ;

}


