// notes from codecademy React Intro To JSX module

// Rendering JSX - a hello world: 

// app.js

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

/* ReactDOM.render()
ReactDOM: the name of the JS library. It contains several React-specific methods, all of which deal with the DOM in some way or another.
.render():
- the most common method to render JSX. 
- takes a JSX expression, creates a corresponding tree of DOM nodes and adds that tree to the DOM
- arguments: 1. JSX expression to be rendered, 2. the DOM element to append to
*/

ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));


/* Passing a Variable to ReactDOM.render()

- 1st argument evaluates to JSX expression (could be a variable)
*/

const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

ReactDOM.render(
  toDoList, 
  document.getElementById('app')
);

/* ### THE VIRTUAL DOM

- ReactDOM.render() only updates DOM elements that have changed!
- most JS frameworks update the DOM much more than they have to.
- (ex checking off the first item on a list hen rebuilding the entire list)
- for every DOM object, there's a corresponding virtual DOM object - a representation of the DOM obj. 
- updading the virtual DOM is fast, because nothing has to get rendered. 
- virtual DOM calculates exactly which DOM elements have changed (diffing)
    1. entire virtual DOM is updated
    2. virtual DOM compared to what it looked like before update - React figures out delta.
    3. ONLY the changed objects get updated on the real DOM
    4. changes on the real DOM cause the screen to change. 
*/

/* ### class vs className

- the word class often trips people up
- in HTML, commong to use class as an attribute name
- in JSX, have to use className instead.
*/

const myDiv = (<div className="big">I AM A BIG DIV</div>);

ReactDOM.render(
    myDiv, 
    document.getElementById('app')
    );


/* ### Self-closing tags

- some HTML elements <img>, <input> use only one tag
- in JSX you HAVE to include the slash - <br/> works but <br> doesn't

*/

const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png"/>
    <article>
      I LIKE TO SIT
      <br />
      JENKINS IS MY NAME
      <br />
      THANKS HA LOT
    </article>
  </div>
);

/* ### JS in your JSX in your JS

- regular JS written inside a JSX expression
- need a way to treat a script (2+3) like script even if it's in btw JSX tags
- do this by wrapping your code in curly braces
- { } single the beginning and end of a JS injection into JSX
*/

ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);

const pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>
);

ReactDOM.render(
    pi,
    document.getElementById('app')
);

/* ### Variables in JSX

- when you inject JS into JSX, JS is part of the same environment as the rest of the JS in your file.
- you can access variables while inside of a JSX expression, even if they were declared outside.

*/

// Declare a variable:
const name = 'Gerdo';

// Access your variable 
// from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;

// common to do this to set attributes

const sideLength = "200px";

const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);

//object properties are also often used to set attributes 

const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
);

/* ### Event Listeners in JSX

- programming in React means constantly working with event listeners
- create an event listener by giving a JSX element a special attribute 
ex: <img onClick={myFunc} />
- name should be something like onClick, onMouseOver
- an event listener attribute's value should be a function. 
*/

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
    <img 
        src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
        alt="kitty" onClick={makeDoggy} />
);

ReactDOM.render(kitty, document.getElementById('app'));

/* ### JSX conditionals: If statements

- can NOT inject an if statement into a JSX expression
- alt: write it outside of JSX

*/

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claires!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);

/* ### JSX Conditions: the ternary operator

- x ? y : z
- if x is truthy, the entire operator returns y.  If falsey, returns z. 
*/

const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);

// another example (coinToss() func returns heads/tails 50% each and pics is an object storing imgs src links)
const img = <img src={pics[coinToss() === 'heads' ? 'doggy' : 'kitty']} />;

/* ### JSX conditionals: &&

- && operator is not React-specific but shows up quite often
- every time you see && either some code will run or NONE will run. 
*/

const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);

/* ### .map in JSX

- array method .map comes up often in JSX

*/

const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>

// another example: 

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
    <li>{person}</li>
);

ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

/* ### Keys

- when you make a list in JSX, sometimes your list will need to include something called keys

<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>

- key is a JSX attribute.  The attribute's name is key and value should be something unique, similar to an id. 
- they do nothing you can see, React uses them internally to keep track of lists. 
- a list needs keys if either of the following are true: 
    1. the list-items have memory from one render to the next.  For ex - each to-do list items needs to 'remember' whether it was checked off.
    2. A list's order might be shuffled. 
*/

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
    <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

/* React.createElement

you don't need JSX to write React!

for ex: 

    const h1 = <h1>Hello world</h1>;

could be rewritten like: 

    const h1 = React.createElement(
        "h1",
        null,
        "Hello, world"
    );

- when a JSX element is compiled, the compiler transforms the JSX element into the method in reg JS
- every JSX element is secretly a call to React.createElement()

*/































