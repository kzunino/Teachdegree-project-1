/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

//Here I created an array containing 6 objects that function as the quotes for my project.

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

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

/*'getRandomQuote' function gets a random quote object from the array.
  Since array contains 6 objects starting from index value 0 to 5 I set the upper
  limit of the math function to 5 and the lower limit to 0.
*/

function getRandomQuote(randomQuote) {
    var randomQuote = quotes[Math.floor(Math.random() * (5 - 0 + 1)) + 0];
    return randomQuote;
}
/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote() {
    var randomQuote = getRandomQuote();
    var html = ' ';
    html += '<p class="quote">' + randomQuote.quote + '</p>';
    html += '<p class="source">' + randomQuote.source + '';
if (randomQuote.citation!== undefined) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }else if (randomQuote.citation === undefined) {
    ;
  }
 if (randomQuote.year !== undefined) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }else if (randomQuote.year === undefined){
    ;
  }
  html += '</p>';
  return html;
  }
document.getElementById('quote-box').innerHTML = printQuote();

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
