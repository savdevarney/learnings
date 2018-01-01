import { Component } from '@angular/core';

@Component({
	selector:'sandbox',
	template:`
		<h1>Hello World</h1>
		<form (submit)="onSubmit()">
			<div class="form-group">
				<label>Name</label>
				<input type="text" class="form-control" [(ngModel)]="name" name="name" #a #b="ngModel" (change)="viewModel(b); viewElement(a)">

			</div>
			<input type="submit" class="btn btn-success" value="Submit">
		</form>
		<hr>
		<ul class="list-group">
			<li class="list-group-item" *ngFor="let user of users">{{ user }}</li>
		</ul>

	`
})

export class SandboxComponent {
	name:string = '';
	users:string[] = ['John Doe', 'Mary Swanson', 'Kevin Smith'];

	onSubmit() {
		console.log(this.name);
		this.users.push(this.name);
		this.name = '';
	}

	viewModel(model) {
		console.log(model);
	}

	viewElement(element) {
		console.log(element);
	}
}


// element: 
// <input class="form-control ng-valid ng-dirty ng-touched" name="name" type="text" ng-reflect-name="name" ng-reflect-model="">

// ngModel of element: 
// NgModel {_parent: NgForm, name: "name", valueAccessor: DefaultValueAccessor, _rawValidators: Array(0), _rawAsyncValidators: Array(0), …}asyncValidator: nullcontrol: FormControl {validator: null, asyncValidator: null, pristine: false, touched: true, _onCollectionChange: ƒ, …}dirty: (...)disabled: (...)enabled: (...)errors: (...)formDirective: (...)invalid: (...)model: ""name: "name"path: (...)pending: (...)pristine: (...)status: (...)statusChanges: (...)touched: (...)untouched: (...)update: EventEmitter {_isScalar: false, observers: Array(1), closed: false, isStopped: false, hasError: false, …}valid: (...)validator: (...)value: (...)valueAccessor: DefaultValueAccessor {_renderer: DebugRenderer2, _elementRef: ElementRef, _compositionMode: true, onChange: ƒ, onTouched: ƒ, …}valueChanges: (...)viewModel: ""_parent: NgForm {submitted: true, _directives: Array(1), ngSubmit: EventEmitter, form: FormGroup}_rawAsyncValidators: []_rawValidators: []_registered: true__proto__: NgControl
