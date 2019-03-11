var quoteChangeTimer;
var quotes

//Here I created an array containing objects that function as the quotes for my project.
//properties include: quote, source, citation (if available), year (if available).

quotes = [
  {quote: '¡Qué vergüenza!', source: 'Ana Salamanca', citation: 'Bendito Seas, Colombia', tag: 'Humor'},
  {quote: 'Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.',
    source: 'Anthony Bourdain', citation: 'No Reservations: Around the World on an Empty Stomach', year: 2007, tag: 'Inspirational'},
  {quote: 'Consider it: every person you have ever met, every person will suffer the loss of his friends and family. All are going to lose everything they love in this world. Why would one want to be anything but kind to them in the meantime?',
    source: 'Sam Harris', citation:  'The End of Faith: Religion, Terror, and the Future of Reason', year: 2007, tag: 'Inspirational, Buddhist'},
  {quote: 'A journey of a thousand miles begins with a single step"', source: 'Laozi', citation: 'Chapter 64 of the Tao Te Ching', tag: 'Inspirational, Philosophy'},
  {quote: 'A person had to work hard for it, but a minute of perfection was worth the effort. A moment was the most you could ever expect from perfection.',
    source: 'Tyler Durden', citation: 'Chuck Palahniuk, Fight Club', year: 1996, tag: 'Buddhist, Literature, Fiction, Philosophy'},
  {quote: 'When the student is ready, the teacher appears', source: 'Dave', year: 2016, tag:'Bar Philosophy' },
  {quote: 'Be yourself. Everyone else is already taken', source: 'Oscar Wilde', year: '19th centry', tag: 'Inspirational, Poetry'},
  {quote: 'Be the change that you wish to see in the world', source: 'Mahatma Gandhi', tag: 'Inspirational'}
]

//getRandomQuote' function gets a random quote object from the array.


function getRandomQuote() {
    var randomQuote = quotes[Math.floor(Math.random() * ((quotes.length - 1) - 0 + 1)) + 0]; //(quotes.length - 1) shortens array range by index value by 1 so it searches from 0 to number of objects.
    return randomQuote;
}


//-printQuote function sets the random quote to call the getRandomQuote function and stores as a variable.

function printQuote() {
    var randomQuote = getRandomQuote();
    var html = ' ';
    html += '<p class="quote">' + randomQuote.quote + '</p>';  //-html combines first two properties of objects
    html += '<p class="source">' + randomQuote.source + '';
if (randomQuote.citation!== undefined) {                        //-undefined is use in place of null because if property is not found null prints "undefined" as part of string.
    html += '<span class="citation">' + randomQuote.citation + '</span>';
      }else if (randomQuote.citation === undefined) {
        ;                                               //-else if statement has a ';' to allow fucntion to take no action--i.e. no html or string is added to html variable. Source: MDN
  }
if (randomQuote.year !== undefined) {
    html += '<span class="year">' + randomQuote.year + '</span>';
      }else if (randomQuote.year === undefined){
        ;
  }
    html += '<span class="tag">' + randomQuote.tag + '</span></p>';
    document.getElementById('quote-box').innerHTML = html; //prints quote
    return html;      //-return html returns strings to html after conditions have been tested on the object.
  }

  printQuote();      //prints first quote when page is refreshed or first opened otherwise defualt quote from html loads as first quote, which is not in the array


//random background function from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
function random_bg_color() {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";

      document.body.style.background = bgColor;
      }

  random_bg_color();

//interval timer function from https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

quoteChangeTimer = window.setInterval(myCallback, 10000);

function myCallback() {
    printQuote();
    random_bg_color();
}

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById("loadQuote").addEventListener("click", printQuote, false);
document.getElementById("loadQuote").addEventListener("click", random_bg_color, false);
