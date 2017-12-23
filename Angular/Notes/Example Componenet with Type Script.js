import { Component } from '@angular/core';

@Component({
	selector: 'sandbox',
	template:`
	<h1>Hello World</h1>
	`
})

export class SandboxComponent {
	name:string = 'John Doe';
	age:number = 35;
	hasChildren:boolean = true;
	city:any = 'Boston';
	myNumbersArray:number[] = [1,2,3];
	myStringsArray:string[] = ['a','b','c'];
	myMixedArray:any[] = [1, 'two', []];
	myTuple:[string, number] = ['hello', 1]
	unusable:void = undefined; // can't set this to anything else.
	u:undefined = undefined;
	n:null = null;


	constructor() {
		
	}

}