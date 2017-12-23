import { Component } from '@angular/core';

@Component({
	selector:'sandbox',
	template:`
		<h1>Hello 
			<!--
			<span *ngIf="showName"> {{ name }} </span>
			<span *ngIf="!showName"> World </span>
			-->
			<span *ngIf="showName; else noName"> {{ name }} </span>
			<ng-template #noName>World</ng-template>

			<p>Hello {{ showName ? name : "World" }}</p>
		
			<hr>

			<div [ngSwitch]="greeting">
				<div *ngSwitchCase="'1'">Hello World</div>
				<div *ngSwitchCase="'2'">Hi there</div>
				<div *ngSwitchCase="'3'">yo!</div>
				<div *ngSwitchDeafult>Hello</div>
			</div>
		</h1>
	`
})

export class SandboxComponent {
	name:string = 'John Doe';
	showName:boolean = false;
	greeting:number = 1;
}