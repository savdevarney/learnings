Example Component

import { Component } from '@angular/core';

@Component({
	selector: 'sandbox',
	template:`
	<h1>{{ name }} is {{ age }} years old</h1>
	<h2>My name is {{ person.firstName }} {{ person.lastName }}
	<h3>{{ showAge() }}</h3>
	`
})

export class SandboxComponent {
	name = 'John Doe';
	age = 35;
	person = {firstName: 'Steve', lastName: 'Smith'};

	constructor() {
		console.log('constructor ran ...');
		//this.age = 36;
		this.hasBirthday();
		this.hasBirthday();
	}

	hasBirthday() {
		this.age += 1;
	}

	showAge() {
		return this.age;
	}
}