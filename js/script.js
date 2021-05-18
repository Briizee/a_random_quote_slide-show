/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [{quote:'The journey of a thousand miles begins with one step.',source: 'Lao Tzu'}, {quote:'That which does not kill us makes us stronger.', source: 'Friedrich Nietzsche'},
 {quote: 'Life is what happens when you’re busy making other plans.', source: 'John Lennon'}, {quote: 'Just keep swimming.', source: 'Ellen DeGeneres', citation: 'Finding Nemo', year: 2003},
{quote: 'Apes together strong!', source: 'Andy Serkis', citation: 'War For The Planet Of The Apes', year: 2017}];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let index = Math.floor(Math.random() * quotes.length);
  let res = quotes[index];

  return res;
}


/***
 * `printQuote` function
***/
function printQuote() {

  let RandomQuote = getRandomQuote();

  let htmlString = '<p class="quote">' + RandomQuote.quote + '</p>' + '<p class="source">' + RandomQuote.source;

  if('citation' in RandomQuote) {
    htmlString += '<span class="citation">' + RandomQuote.citation + '</span>';
  }

  if('year' in RandomQuote) {
    htmlString += '<span class="year">' + RandomQuote.year + '</span>';
  }
  
  htmlString += '</p>';

  document.getElementById('quote-box').innerHTML = htmlString;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);