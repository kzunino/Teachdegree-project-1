
//Here I created an array containing 6 objects that function as the quotes for my project.
//properties include: quote, source, citation (if available), year (if available).

var quotes = [
  {quote: '¡Qué vergüenza!', source: 'Ana Salamanca', citation: 'Bendito Seas, Colombia'},
  {quote: 'Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.',
    source: 'Anthony Bourdain', citation: 'No Reservations: Around the World on an Empty Stomach', year: 2007},
  {quote: 'Consider it: every person you have ever met, every person will suffer the loss of his friends and family. All are going to lose everything they love in this world. Why would one want to be anything but kind to them in the meantime?',
    source: 'Sam Harris', citation:  'The End of Faith: Religion, Terror, and the Future of Reason', year: 2007},
  {quote: 'A journey of a thousand miles begins with a single step"', source: 'Laozi', citation: 'Chapter 64 of the Tao Te Ching'},
  {quote: 'A person had to work hard for it, but a minute of perfection was worth the effort. A moment was the most you could ever expect from perfection.',
    source: 'Tyler Durden', citation: 'Chuck Palahniuk, Fight Club', year: 1996},
  {quote: 'When the student is ready, the teacher appears', source: 'Dave', year: 2016},
]

/*'getRandomQuote' function gets a random quote object from the array.
  Since array contains 6 objects starting from index value 0 to 5 I set randomQuote variable to
  generate a random array number between index value 0 and the length of the array using the quotes.length method.
*/

function getRandomQuote() {
    var randomQuote = quotes[Math.floor(Math.random() * ((quotes.length - 1) - 0 + 1)) + 0]; //(quotes.length - 1) shortens array range by index value by 1 so it searches from 0 to 5.
    return randomQuote;
}


//-printQuote function sets the random quote to call the getRandomQuote function and stores as a variable.

function printQuote() {
    var randomQuote = getRandomQuote();
    var html = ' ';
    html += '<p class="quote">' + randomQuote.quote + '</p>';  //-html combines first two properties of objects
    html += '<p class="source">' + randomQuote.source + '';
if (randomQuote.citation!== undefined) {                        //-undefined is use in place of null because if property is not found null prints "undefined to string"
    html += '<span class="citation">' + randomQuote.citation + '</span>';
      }else if (randomQuote.citation === undefined) {
        ;                                               //-else if statement has a ';' to allow fucntion to take no action--i.e. no html or string is added to html variable. Source: MDN
  }
if (randomQuote.year !== undefined) {
    html += '<span class="year">' + randomQuote.year + '</span>';
      }else if (randomQuote.year === undefined){
        ;
  }
    html += '</p>';
    return html;      //-return html returns strings to html after conditions have been tested on the object.
  }

document.getElementById('quote-box').innerHTML = printQuote();

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById("loadQuote").addEventListener("click", printQuote, false);
