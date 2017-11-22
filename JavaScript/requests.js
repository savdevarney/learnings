// Notes from codecademy JS track, REQUESTS module


// XMLHttpRequest object for AJAX GET request ... boilerplate code

const xhr = new XMLHttpRequest; // a new object using the new operator
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json'; // responseType property set to json

// onreadystatechange --> an event handler
xhr.onreadystatechange = function() {
    if (xhr.readyState === XHMLHttpRequest.DONE) {
        console.log(xhr.response);
    }
};

xhr.open('GET', url);
xhr.send();

// XMLHttpRequest object for AJAX GET request ... boilerplate code

const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';

xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
}

xhr.open('POST', url);
xhr.send(data);

// Google URL Shortener API

// html in index.html:
/*
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Byte Size</title>
  <link rel="stylesheet" type="text/css" href="public/style.css" />
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
</head>

<body>
  <header>
    <img src="https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/bytesize_logo.svg" class="logo" />

  </header>
  <main id="main">
    <div class="container">

      <h1>Enter a URL</h1>

      <form id="form" autocomplete="off">
        <input type="text" id="input" value="">
        <button id="shorten">Shorten</button>
        <button id="expand">Expand</button>
      </form>

      <div id="responseField">

      </div>

    </div>
  </main>
  <script src='https://code.jquery.com/jquery-3.1.0.min.js'></script>
  <script src="public/main.js"></script>
</body>
</html>
*/

// js in main.js to expand a URL that has been shortened via google URL Shortener API
const apiKey = 'AIzaSyCprb1V5zIbu27H1v4wVHV2UhlwzV44Hdo';
const url = 'https://www.googleapis.com/urlshortener/v1/url';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
  const urlToExpand = url + 
        '?key=' + apiKey +
        '&shortUrl=' + $inputField.val();
/*
  const xhr = new XMLHttpRequest(); 
  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.response);
      // response is an object with 4 properties: id, kind, longURL and status ...id=short, longURL=long
      $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
    }
  };
  
  xhr.open('GET', urlToExpand);
  xhr.send();
*/
    // refactored with JQuery:
/*
    $.ajax({
        url: urlToExpand,
        type: 'GET',
        dataType: 'json',
        success(response) {
            $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
        },
        error(jqXHR, status, errorThrown) {
            console.log(jqXHR);
        }
    });
*/
    // further refactored: 
        $.get(urlToExpand, response => {
            $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
        }, 'json');
}

function shortenUrl() {
    //create an object with the longUrl prperty that has urlToShorten as its value and stringify it
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();

  /* 
  const data = JSON.stringify({longUrl: urlToShorten});
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.response);
      $responseField.append('<p>Your shortened url is: </p><p>' + xhr.response.id + '</p>');
    }
  }
  xhr.open('POST', urlWithKey);
  // Google API Shortener requires content-type to be set in header
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
  */

  // refactored with JQuery:

/*
    $.ajax({
        url: urlWithKey,
        type: 'POST',
        data: JSON.stringify({longUrl: urlToShorten}),
        dataType: 'json',
        contentType: 'application/json',     
        success(response) {
            $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
        },
        error(jqXHR, status, errorThrown){
            console.log(jqXHR);
        }
    });
*/

    // further refactored (although not much shorter because contentType is required and therefore an entire settings object passed in)

    $.post({
        url: urlWithKey,
        data: JSON.stringify({longUrl: urlToShorten}),
        dataType: 'json',
        contentType: 'application/json',     
        success(response) {
            $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
        },
        error(jqXHR, status, errorThrown){
            console.log(jqXHR);
        }
    });


function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}


function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);

// USING jQuery for GET and POST Ajax calls
// $.ajax() is a method provided by JQuery to handle AJAX requests.  
// All parts of the request are included in a single object that is passed to the method as an argument.

// GET request boiler plate

$.ajax({
    url: 'https://api-to-call.com/endpoint',
    type: 'GET',
    dataType: 'json',
    success(response) {
        //code to execute with response on success
    },
    error(jqXHR, status, errorThrown){
        // code to execute with response on failure
    }
});

// POST request boiler plate

$.ajax({
    url: 'https://api-to-call.com/endpoint',
    type: 'POST',
    data: JSON.stringify({id: 200}),
    dataType: 'json',
    success(response) {
        //code to execute with response on success
    },
    error(jqXHR, status, errorThrown){
        // code to execute with response on failure
    }

});

//AJAX requests with $.get()

$.get('https://api-to-call.com/endpoint', response => {}, 'json');
// parameters: url to make request, success call back function, response format
// if you are making a request that requires more settings, pass in an entire settings bject instead.
$.getJSON('https://api-to-call.com/endpoint', response => {});


//AJAX requests with $.post()
$.post('https://api-to-call.com/endpoint', {data}, response => {...}, 'json');
// parameters: url, data object, success call back, response format.
// if you are making a request that requires more settings, pass in an entire settings object instead.
// for example - for Google's URL shortener API, we need to specify contentType.








