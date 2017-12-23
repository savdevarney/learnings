import { Component } from '@angular/core';

@Component({
	selector:'sandbox',
	template:`
		<h1>Hello World</h1>
		{{ people }}
		<ul>
			<li *ngFor="let person of people">
				{{ person }}
			</li>
		</ul>

		<ul>
			<li *ngFor="let person of people; let i = index">
				{{ i + 1 }} {{ person }}
			</li>
		</ul>

		<ul>
			<li *ngFor="let person of people2">
				{{person.firstName}} {{person.lastName}}
			</li>
		</ul>
	`
})

export class SandboxComponent {
	people = ['Rick', 'Daryl', 'Carl', 'Glen'];
	people2 = [

		{ 
			firstName: 'Rick',
			lastName: 'Grimes'
		},

		{ 
			firstName: 'Daryl',
			lastName: 'Grimes'
		},

		{ 
			firstName: 'Carl',
			lastName: 'Grimes'
		}
	]

	constructor() {
		this.people[2] = 'Carol';
	}
}