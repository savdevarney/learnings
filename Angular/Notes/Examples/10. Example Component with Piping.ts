import { Component } from '@angular/core';

@Component({
	selector:'sandbox',
	template:`
		<h1>Hello World </h1>
		<p>My brithday is {{ birthday | date }}</p>
		<p>My brithday is {{ birthday | date:"MM-dd-yy"}}</p>
		<p>I was born in {{ birthday | date:"yyyy"}}</p>
		<p>I love {{ 'cake' }}</p>
		<p>I love {{ 'cake' | uppercase }}</p>
		<p>Your total is {{ total | currency:"GBP" }}</p>
		<p>Our fee is {{ fee | percent }} </p>
	`
})

export class SandboxComponent {
	birthday = new Date(1981, 1, 15);
	total = 500;
	fee = .1;

}