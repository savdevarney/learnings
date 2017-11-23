// Introduction to requests with ES6

/*

SUMMARY

Promise
- added to ES6
- an object that acts as a placeholder for data that has been requested but not yet received.
- eventually a promise resolves to a value requested or to a reason why the request failed.
- call back functions to handle response (if Promise fulfilled) or error (if Promise is rejected).

fetch() function
- uses Promises to handle requests

.then() method
- handle fulfilled and rejected Promises

async and await keywords make this more simple. 
*/



// FETCH() GET REQUESTS
// 1. create a request object
// 2. send that request to the URL
// 3. return a Promise that ultimately resolves to a response object

// if users don't have fetch() support, can add a polyfill to be used as an alternative.

// boiler plate code: 

fetch('https://api-to-call.com/endpoint').then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Request failed!');
}, networkError => console.log(networkError.message)
).then(jsonResponse => jsonResponse);
  

// asynchronisty! We don't call downstream functions until the response has been received.
// .then() takes two callback functions as parameters 1. success handler and 2. failure handler. 
// response is the resolution of the Promise returned by the fetch() function
// because .json() takes time to implement, it returns a Promise that will eventually resolve with the desired JSON object.
// the throw new Error after the conditional will only be thrown if response.json() is not returned because the response was not ok. 


// FETCH() POST REQUESTS

// boiler plate code:

fetch('https://api-to-call.com/endpoint', {
    method: 'POST',
    body: JSON.stringify({id: '200'})
}).then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Request failed!');
}, networkError => console.log(networkError.message)
).then(jsonResponse => jsonResponse);

// fetch with POST takes 2 arguments - 1. URL and 2. settings object w/ a. method and b. body data

//ASYNC AWAIT GET REQUESTS

// - ES7, so ESSENTIAL that you are transpiling if you use this

async function getData(){
    try {
        let response = await fetch('https://api-to-call.com/endpoint');
        if (response.ok) {
            let jsonResponse = await response.json();
            // code to execute with jsonResponse
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
}

// async keyword creates a function that will return a Promise.
// try/catch statement to separate success code from error handling code.
// await keyword tells the program to continue moving through the message queue while the Promise resolves. 

//ASYNC AWAIT POST REQUESTS
async function getData(){
    try {
        let response = await fetch('https://api-to-call.com/endpoint', {
            method: 'POST',
            body: JSON.stringify({id: '200'})
        });
        if (response.ok) {
            let jsonResponse = await response.json();
            // code to execute with jsonResponse
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
}

/* IN SUMMARY:

1. GET and POST requests can be created a variety of ways.
2. We can asynchronously request data from APIs using AJAX. fetch() and async/await are new technologies developed in ES6 and ES7 respectively.
3. Promises are a new type of JavaScript object that represent data that will eventually be returned from a request.
4. fetch() is a web API that can be used to create requests. fetch() will return Promises.
5. We can chain .then() methods to handle Promises returned by fetch.
6. The .json() method converts a returned Promise to a JSON object.
7. async is a keyword that is used to create functions that will return Promises.
8. await is a keyword that is used to tell a program to continue moving through the message queue while a Promise resolves.
9. await can only be used within functions declared with async.
*/


// REFACTORED GOOGLE URL SHORTENER SCRIPT FOR ES6

const apiKey = 'AIzaSyCprb1V5zIbu27H1v4wVHV2UhlwzV44Hdo';
const url = 'https://www.googleapis.com/urlshortener/v1/url';

// Some page elements

const $inputField = $('#address');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

async function expandUrl() {
  const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
  try {
    let response = await fetch(urlToExpand);
    if (response.ok) {
      let jsonResponse = await response.json();
      $responseField.append('<p> Your expanded url is <p></p> ' + jsonResponse.longUrl + '</p>');
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
}

async function shortenUrl() {
  const urlToShorten = $inputField.val();
  let urlWithKey = url + `?key=` + apiKey;
  try {
    let response = await fetch(urlWithKey, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        longUrl: urlToShorten
      })
    });
    if (response.ok) {
      let jsonResponse = await response.json();
      $responseField.append('<p> Your shortened url is <p></p>' + jsonResponse.id + '</p>');
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
};

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
};

// Call the functions when the appropriate button is clicked

$expandButton.click(expand);
$shortenButton.click(shorten);