//ES6 LEARNINGS

// DEFAULT ARGUMENTS

function calculateBill(total, tax=0.13, tip=0.15){
	// tax = tax || 0.13;
	// tip - tip || .20;

	return total + (total*tax) + total*tip);

}

// example when you want to leave one argument off and use default:
const totalBill = calculateBill(100, undefined, 0.25)

// WHEN NOT TO USE AN ARROW FUNCTION

// when you need this to be bound to the function
const button = document.querySelector('#pushy');
button.addEventListener('click', () => {
	console.log(this); // this will be WINDOW ... this is not bound to function
	this.classList.toggle('on');
})

// solution: 
button.addEventListener('click', function() {
	this.classList.toggle('on');
})

// when you need a method to bind to an object
const person = {
	points: 23,
	score: () => {
		this.points++; 
	}
}

// whenever you call person.score() it would increment the score
// but person.points still is 23 no matter how many times you call it because this is bound to window

// solution:

const person = {
	points: 23, 
	score: function() => { // by using an anonymous function, this remains bound to the object
		this.points++;
	}
}

// or 

const person = {
	points: 23, 
	score() {			// this works too! 
		this.points ++
	}
}

// when you need to add a prototype method

class Car {
	constructor(make, colour) {
		this.make = make;
		this.color = color;
	}
}

const beemer = new Car('bmw', 'blue');
const subie = new Car('Subaru', 'white');

// now add on prototype ... which allows you to add method to all instances, even ones you've already instantiated. 
Car.prototype.summarize = () => {
	return `This car is a ${this.make} in the color ${this.color}`;
};

beemer.summarize(); // won't work unless .summarize = function() {}

// when you need arguments object

// arguments: a keyword in JS that gives you an array of all items that were passed in
const orderChildren = () => {
	const children = Array.from(arguments);
	return children.map((child, i) => {
		return `${child} was child #${i + 1}`
	})
}

orderChildren('Wes', 'Sav', 'Kate'); // won't work (arguments will be undefined) unless orderChildren = function() {}


// creating HTML fragments with template literals

const dogs = [
	{ name: 'Snickers', age: 2}, 
	{ name: 'Hugo', age: 8}, 
	{ name: 'Sunny', age: 1}
];

const markup = `
	<ul class='dogs'>
	${dogs.map(dog => `<li>${dog.name} is ${dog.age* 7}</li>`).join('')} 
	</ul>
		`
document.body.innerHTML = markup;

// example user ternary operator:

const song = {}
	name: 'dying to live', 
	artist: 'Tupac', 
	featuring: 'Biggie Smalls' 
}

const markup = `
	<div class="song">
		<p>
		${song.name} - ${song.artist}
		${song.featuring ? `(featuring ${song.featuring` : ''}
		</p>
	</div> 
	`

// render functions (seperate components that handle seperate data in componenets)

const beer = {
	name: 'Belgian Wit', 
	brewery: 'Steam Whistle Brewery', 
	keywords: ['pale', 'cloudy', 'spiced', 'crisp']
}

function renderKeywords(keywords) {
	return `
		<ul>
		${keywords.map(keyword => `<li> ${keyword} </li>`).join('')}
		</ul>
	`
}

const markup = `
	<div class='beer'>
		<h2> ${beer.name}</h2>
			<p class='brewery'> ${beer.brewery}</p>
			${renderKeywords(beer.keywords)}
			</div>
`


// TAGGED TEMPLATE LITERALS

function highlight(strings, ...values) {
	// strings = array of everything up to the template
	// ^ rest parameter syntax
	// values = array of template values (will be one less then strings araray)

	let str = '';

	strings.forEach((string, i) => {
		// str += string + (values[i] || '')
		str += `${string} <span class='hl">${values[i] || ''}</span>`;
		return str;
	})

};

const name = 'Snickers';
const age = 100;

const sentence = highlight`My dog's nameis ${name} and he is ${age} years old`;
document.body.innerHTML = sentence;

// SANITIZING USER DATA WITH TAGGED TEMPLATES

/* 
- sanitizing data before putting it in the dom. 
- must make sure the user isn't doing anything sneaky and trying to do a xss, inserting an image, etc'
- use a sanitizer library called dompurify
*/

function sanitize(strings, ...values) {
	const dirty = strings.reduce((prev, next, i) => `${prev}${next}${values[i] || ''}`, '');
	return DOMPurify.sanitize(dirty);
}

const first = 'Wes';
const aboutMe = `I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('you got hacked');" />`;

const html = sanitize`
	<h3> ${first}<h3>
	<p>$<aboutMe?</p>
`;

// NEW STRING METHODS

/*

four new methods for readability and reduce the need for using regex

*/

const course = 'RFB2';
const flightNumber= '20-AC2018-jz';
const accountNumber = '825242631RT0001';
// could be RT, RP, RC, etc. for Tax, Corporate Tax, Payroll

const make = 'BMW';
const model = 'x5';
const colour = 'Royal Blue';

// .startsWith()
course.startsWith('RFB') // true
course.startsWith('rfb') // false
flightNumber.startsWith('AC') // false
flightNumber.startsWith('AC', 3) // true

// .endsWith()
flightNumber.endsWith('jz') // true
accountNumber.endsWith('RT', 11) // true (just take the first 11 numbers, ignore rest

// .includes()
flightNumber.includes('AC') // true
flightNumber.includes('ac') // false, case insensitive

// .repeat()
// left pad function: 

function leftPad(str, length=20) {
	return `-> ${' '.repeat(length - str.length)}`
}

// will all be perfectly right aligned:

console.log(leftPad(make));
console.log(leftPad(model));
console.log(leftPad(colour));


// DESTRUCTURING OBJECTS

// allows us to extra properties from JS objects or items from an array into their own values at the same time. 

const person = {
	first: 'Wes', 
	last: 'Bos', 
	country: 'Canada',
	city: 'Hamilton',
	links: {
		social: {
			twitter: 'twitter-url',
			facebook: 'facebook-url',
		}
	}
}

// create two top level variables inside of the scobe
const { first, last } = person; // when data wasn't nested... 

// with nested data

const: { twitter, facebook } = wes.links.social

// renaming variables as you're destructuring:

const {twitter:tweet, facebook:fb } = wes.links.social

// setting defaults

// also a req for height and fontsize but they're not in our obj

const settings = {
	width: 300, 
	color: 'black'
}

const { width, height, color, fontSize } = settings; // width and height will be undefined

const { width=100, height=100, color='blue', fontSize=25 } = settings; 
// importantly, defaults will ONLY be used if they're not in the object!
// useful when we pass a settings object to a function. 

const { w: width = 400, h: height = 500 } = { w: 800 }

// variables that are created are width and height
// destructuring w from object on left and naming it width, with a value of 800 bec it's available
// destructuring h from object on left and naming it height, but it's not there so it's setting height to it's default - 500















