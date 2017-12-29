import { Component } from '@angular/core';
import { Customer } from './Customer'

@Component({
	selector: 'sandbox',
	template:`
	<h1>Hello World</h1>
	`
})

export class SandboxComponent {

	// customer: {id:number, name:string, email:string} // model for customer object

	customer:Customer;
	customer:Customer[]; //value needs to be an array whose values are of Customer type

	constructor() {
		// has to be in same order as model
		this.customer = {
			id:1, 
			name: "John Doe'",
			email: 'john@gmail.com'
		}

		this.customers = [
			{
				id:1, 
				name: "John Doe'",
				email: 'john@gmail.com'
			},
			{
				id:2, 
				name: "Sam Doe'",
				email: 'sam@gmail.com'
			},
			{
				id:3, 
				name: "Tony Doe'",
				email: 'tony@gmail.com'
			}

		] 
}

/* code in Customer.ts:

export interface Customer {
	id:number, 
	name:string, 
	email:string
}

*/