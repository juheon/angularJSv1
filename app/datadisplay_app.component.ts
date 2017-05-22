import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h2>{{player}} is famous in {{sport}}. She is from {{capital}} and likes {{myFruit}}. Among following fruits <ul><li *ngFor="#fruit of fruits">{{fruit}}</li></ul></h2>'
})
export class AppComponent {
	player="Mr.Good";
	sport='Football';
	
	capital: string;
	constructor() {
		this.capital="STL";
	}
	
	fruits=['orange','strawberry','apple'];
		myFruit=this.fruits[1];
}