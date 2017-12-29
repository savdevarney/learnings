import { Component } from '@angular/core';

@Component({
	selector:'sandbox',
	template:`
		<h1>Hello World </h1>

		<button (click)="fireEvent($event)">Click Event</button>
		<button (mouseover)="fireEvent($event)">Mouseover Event</button>
		<button (mousedown)="fireEvent($event)">Mousedown Event</button>
		<button (mouseup)="fireEvent($event)">Mouseup Event</button>
		<button (dblclick)="fireEvent($event)">Doubleclick Event</button>
		<button (drag)="fireEvent($event)">Drag Event</button>
		<button (dragover)="fireEvent($event)">Dragover Event</button>

	`
})

export class SandboxComponent {

	fireEvent(e){
		// console.log(greeting);
		console.log(e.type);

	}

}