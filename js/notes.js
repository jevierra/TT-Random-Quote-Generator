function printQuote() {

var co = getRandomQuote; 
var totalQuote = '<p class="quote">' + co.quote + '</p>';
	 
	 if(co.source){totalQuote += '<span class="source">' + co.source + '</span>';}
     
     if(co.citation){totalQuote += '<span class="citation">' + co.citation + '</span>';}
	 

	 ((repeat for all properties)) 


	 document.getElementById('quote-box').innerHTML = totalQuote ; }