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












