// COMPONENTS INTERACTING


/* 

COMPONENTS INTERACT

- React apps contain dozens, or even hundreds of components
- what makes React special? The WAYS components interact

*/

// Example: Component in a render function:
// - Crazy's render method returns an instance of the OMG component

class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}

class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}


/* 

Example: make <ProfilePage /> render a <NavBar />

Notes:
- when you use React.js, every JS file is invisible to every other file by default. 
- need to import NavBar into ProfilePage JS file.
- if the name of the module begins w/ a . or / then JS will treat it as a filepath and import the file it finds. 
- if the file path name doesn't have .js, it is assumed.

*/

// ProfilePage.js

import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';

class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

ReactDOM.render(
<ProfilePage />, document.getElementById('app'));

// NavBar.js

import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}



// THIS.PROPS


/* 

ACCESSING A COMPONENT'S PROPS

- every component has a props (an object that holds info about the component)

*/

// Example

// would render an empty props object, {}

class PropsDisplayer extends React.Component {
  render() {
    const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}


/* 

USING PROPS TO PASS INFORMATION TO A COMPONENT

<Example message="this is some top secret info." />
<Greeting myInfo={["top", "secret", "lol"]} />
<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />

*/

// example: 

// {myProp: "Hello" would render in PropsDisplay component}

ReactDOM.render(
  <PropsDisplayer myProp="Hello" />, 
  document.getElementById('app'));

/*

RENDING COMPONENT PROP INFORMATION

Will often want a component to display the information you pass.  to do that:
    1. find the component class that's going to receive the info.
    2. include this.props.name-of-information in that component class's render method's return statement

*/

// example:

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Groberta' />, 
  document.getElementById('app')
);

/* 

PASSING PROPS BTW COMPONENTS

Most common way to use props is to pass info to a component, from a different component. 

*/

// example: 

// pass a prop to a <Greeting /> component from an <App /> componenet instance. 
// greeting will be rendered by another component, so don't need ReactDOM in greeting ... export it & import in the rendering component file

// Greeting.js

import React from 'react';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

// App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="sav" />
        
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);


/*

RENDER DIFFERENT UI BASED ON PROPS

- using props to make decisions

*/

// example


// Greeting.js
import React from 'react';
import ReactDOM from 'react-dom';

export class Greeting extends React.Component {
  render() {
    if (this.props.signedIn == false) {
      return <h1>GO AWAY</h1>;
    } else {
      return <h1>Hi there, {this.props.name}!</h1>;
    }
  }
}



// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Alison" signedIn={true} />
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);


/* 

EVENT HANDLER IN COMPONENT CLASSE

- often will pass functions as props, and especially common to pass event handler functions
- will need to define the event handler before passing anywhere
- it is a method on the component class
- prop attributes will work with just about any name, so long as the name follows the JS variable name rules
- when passing a function as a prop:
      name = name of function (talk)
      value = information you want to pass ({this.talk})


handleEvent, onEvent and this.props.onEvent

- naming choices occur in the parent component - that is in the component that defines the event handler and passes it. 
- convention:
      - if you are listening for click, name event handler handleClick
      - prop name should be the word on plus event type - ie onClick or onKeyPress

*/

// Example

// if the user clicks on the button element, you want your passed-in talk function to get called
// attach talk to the <button></button> as an event handler

// Talker.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  
// event handler, named talk
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    // for the prop name, also chose talk as the name
    return <Button onClick={this.handleClick}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);


// Button.js

import React from 'react';

export class Button extends React.Component {
  
  render() {
    return (
      // pass the event handler as a prop
      <button onClick={this.props.onClick}> 
        Click me!
      </button>
    );
  }
}

/* 
- when you give a <button> an attribute named onClick, the name onClick has special meaning.  It creates an eventListener
- when you give <button> an attribute named onClick in Talker's render method, it doesn't do anything special - just an arbitrary name. 
      - because <button /> is NOT an HTML-like JSX element, it's a component instance. 
      - *** namkes like onClick only create event listeners if they're used on HTML-like JSX elements, otherwise they're just ordinary prop names. 
*/


/*

this.props.children

- every component's props object has a property named children
- this.props.children returns everything in btw a component's opening and closing JSX tags

*/

// example

// App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);


// List.js
import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`; // if this.props.children is >1 it is an Array --> here that's exploited to pluralize the title. 
    if (this.props.children instanceof Array) {
      titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}


/* 

defaultProps

*/

// Example

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text} 
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: 'I am a button'};

ReactDOM.render(
  <Button />, 
  document.getElementById('app')
);


/* 

SUMMARY INFO: 
- pass a prop by giving an attribute to a component instance
- access a passed-in prop via this.props.prop-name

*/


/*

this.state

A React component can access dynamic information in two ways:
- props
- state


- state is NOT passed in from the outside, a component decides its own state.
- to make a component have state, give the component a state property declared inside of a constructor method
- this.state is an object that represents the initial 'state' of any component instance. 
- React components ALWAYS have to call super in their constructors to be set up properly
*/

// Example


class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return <div></div>;
  }
}

<Example />

/* 

ACCESSING STATE:

- use: this.state.name-of-property
- this allows a component to read a property in its state from inside its render function

*/

class TodayImFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
}

/*

UPDATING STATE:

- a component can also CHANGE its own state in addition to reading it. 
- use: this.setState()
    - arguments: object, callback (really never need the callback)

- most common way to call is from another function

- *** whenever you define an event handler that uses this you need to add this line to your constructor:
      this.mehtodName = this.methodName.bind(this)
- *** also, can NOT call this.setState() from inside the render function. 
- anytime you call this.setState(), it AUTOMATICALLY calls .render() as soon as the state has changed. 
    - this is why you can't call this.setState from WITHIN .render() because it would be an infinite loop
*/

// simple example: 

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: 'sunny' };
    this.makeSomeFog = this.makeSomeFog.bind(this);
    // this line is necessary, becuase makeSomeFog()'s body contains this. 
  }

  makeSomeFog() {
    this.setState({
      weather: 'foggy'
    });
  }
}

// Example


// Mood.js

import React from 'react';
import ReactDOM from 'react-dom';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById('app'));


// Toggle.js

import React from 'react';
import ReactDOM from 'react-dom';


const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
    this.state.color = this.state.color === green ? yellow : green;
  }
  
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          <button onClick={this.changeColor}>
          Change color
          </button>
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
<Toggle />, document.getElementById('app')
);

// IN SUMMARY: A React app is basically just a lot of components, setting state and passing props to on another. 
















