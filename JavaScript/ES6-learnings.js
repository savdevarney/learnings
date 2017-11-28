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


// DESTRUCTURING ARRAYS

const details = ['Wes Bos', 123, 'wesbox.com'];

// const name = details[0]

const [ name, id, website ] = details;

// also works well w/ comma separated string

const data = 'Basketball,Sports,90210,23';

const [ itemName, category, sku, inventory ] = data.split(',');

// what if destructure something that's not the same length? It just throws the same one out. 

const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];

const [captain, assistant, ...players ] = team;

// using the rest operator, we can assign players to items at indices 2+

// SWAPPING VARIABLES WITH DESTRUCTURING

let inRing = 'Hulk Hogan';
let onSide = 'The Rock';

// old way to swap ... using tmp variable 

[ inRing, onSide ] = [ onSide, inRing ];

// DESTRUCTURING FUNCTIONS - MULTIPLE RETURNS AND NAMED DEFAULTS

function convertCurrencty(amount) {

	const converted = {
		USD: amount * 0.76,
		GPB: amount * 0.53, 
		AUD: amount * 1.01,
		MEX: amount * 13.30
	}; 
		return converted;
	}

const hundo = convertCurrency(100);

hundo.aud // etc...

// with destructuring can return multiple values from function (obj and then destructure the answer)

const { USD, GPB, AUD, MEX } = convertCurrency(100); // and order doesn't matter

// named functions - making them order independent!

function tipCalc(total, tip=0.15, tax=0.13) { 

}

function tipCalc({ total, tip=0.15, tax=0.13 }) {
	return total + (tip*total) + (tax*total);
}

const bill = tipCalc({ total: 200, tip: 0.20}); // default tax will kick in

function tipCalc({total=100, tip-0.15, tax=0.13} = {}) {} // if nothing is passed in



// FOR OF LOOPS

cuts.forEach((cut) => {
	console.log(cut);
});

// FOR IN LOOPS

for (const index in cuts) {
	console.log(cuts[index]); // gives us the index
}


// downsides: can't break out of loop in certain conditions, also can't continue or skip

// FOR OF LOOP and destructuring with iterators

const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'] ;
cuts.entries() // an array iterator that returns [[0, 'Chuck'], [1, 'Brisket'] ... ]

for (const cut of cuts) {
	console.log(cut);
}

for (const cut of cuts.entries()) {

}

for (const [i, cut] of cuts.entries()) {
	console.log(`${cut} is the ${i+1} item`)
}


function addUpNumbers() {
	let total = 0;
	for (const num of arguments) {
		total += num;
	}
	return total;
}

addUpNumbers(10, 23, 52, 34, 12, 13, 123); // don't know how many numbers
arguments // arrayish type of thing that provides all the args that got passed in. it has .length and a Symbol.iterator

// using for-of to iterate through a string

const name = 'Wes Bos';
for (const char of name) {

}

// loop over dom collections w/o having to convert to a true array

cost paras = document.querySelectorAll('p');
console.log(ps);

for (const paragraph of ps) {
	paragraph.addEventListener('click', function() {
		console.log(this.textContent);
	})
}

// USING FOR IN WITH OBJECTS

// objects aren't iterable ... 

Object.entries() // ES7, so would need to pollyfill
Object.keys() // array of all the keys and then would need to do Object[key] to get value

for (const key in apple) {
	const value = apple[key];
	console.log(value, key);
}






















