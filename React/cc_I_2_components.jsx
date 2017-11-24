// COMPONENTS


// THE COMPONENT 

/* 

COMPONENT:

- small, reusable chunk of code responsible for one job.
- that job is often to render some HTML. 

*/

// EXAMPLE:

// React = new object (React library) with methods to use React. 
// only used for pure react purposes, such as creating components or writing JSX elements
import React from 'react'; 
// ReactDom contains methods for interacting with DOM.
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
	//class body = instructions for how to build components
	// at a min, a render method needs to be included
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
	// instantiate an instance of MyComponentClass
	// ReactDOM.render() calls the componenet's render method which returns the JSX element
	// it then takes that element and adds it to the virtual DOM
  <MyComponentClass />,
  document.getElementById('app')
);

/*
- when a JSX element is compiled, it is transformed into a React.createElement() call.
- therefore, the step of imorting the React lirary and saving it to a React variable is essential for any JSX to work.
- the DOM is USED in React apps, but it isn't part of React
*/


/*

COMPONENT CLASS

- every component must come from a component class. 
- component classes are factories for components
- to create a component class, use a base class from the React library: React.component. 

React.Component
- JS class you can subclass to create your own componenet class. 
	- syntax:
	class YourComponentName extends React.component {}

- class must be named
- must begin with capital letters. UpperCamelCase
- class body: 
	- instructions for creating classes
	- written in typical JS ES6 class syntax
	- MUST include a render property (method) - value is a funtion
	- render method usually returns a JSX expression

JSX elements can be either HTML-like or component instances. 
JSX uses capitalization to distinguish between the two. 
The capitalization tells the browser that it's a component instance and not an HTML tag

When instantiating a componenet, it inherits all of the methods of it's component class,
so all instances of the componenet have the methods of the class. 
*/

/* 

COMPONENTS AND ADVANCED JSX 
- notice the () in the return in the example (multiline JSX expression)


*/

// example: 

class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="http://bit.ly/1WGzM4G">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);

// example utilizing variables:

const redPanda = {
  src: 'http://bit.ly/1U92LL3',
  alt: 'Red Panda',
  width:  '200px'
};

class RedPanda extends React.Component {
  render() {
    return (
      <div>
        <h1>Cute Red Panda</h1>
        <img 
        // note: curly-brace JS injections inside of the render function.
          src={redPanda.src} 
          alt={redPanda.alt} 
          width={redPanda.width} />
      </div>
    );
  }
}

ReactDOM.render(
  <RedPanda />,
  document.getElementById('app')
);

/* 

PUTTING LOGIC IN RENDER FUNCTIONS

render() 
- must have a return statement
- can also have simple calcs that need to happen right before a component renders
*/

// example: 

class Random extends React.Component {
  render() {

    // First, some logic that must happen before rendering
    // make sure it's INSIDE the render() function
    const n = Math.floor(Math.random()*10+1);

    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}

ReactDOM.render(
  <Random />,
  document.getElementById('app')
);

// example using conditionals:

import React from 'react';
import ReactDOM from 'react-dom';

class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }

    return <h1>Today I am going to {task}!</h1>;
  }
}

ReactDOM.render(
	<TodaysPlan />,
	document.getElementById('app')
);

/* 

THIS

- the word 'this' gets used in React a lot. 
- especially likely to see 'this' inside of the body of a component class declaration

*/

// Example


// here, 'this' refers to an instance of IceCreamGuy
// more technically, 'this' refers to an the object on which this's enclosing method, in this case .render() is called

class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }

  render() {
    return <h1>I like {this.food}.</h1>;
    // don't need to use .food() because food is a getter method
  }
}

/* 

EVENT LISTENERS IN COMPONENETS

- Event handler: function that gets called in response to an event.
- in React, event handlers are defined as methods on a component class.

*/

// Example

// myFunc will be called anytime a user hovers over the rendered <div></div> element. 

class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }

  render() {
    return (
      <div onHover={this.myFunc}>
      </div>
    );
  }
}














