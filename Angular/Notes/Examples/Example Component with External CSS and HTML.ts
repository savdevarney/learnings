import { Component } from '@angular/core';

@Component({
	selector: 'sandbox',
	templateUrl:`./sandbox.component.html`,
	styleUrls: [`./sandbox.component.css`]
	/* styles: [`
		.special{
			color:green;
			font-size:20px;
			text-transform:uppercase
		}
	`] */
})

export class SandboxComponent {

}

/* 

sandbox.component.html:

<h1 class="special">Hello World From the HTML File</h1>


sandbox.component.css:

.special {
	color: green;
	font-size: 20px;
	text-transform: uppercase
}


*/