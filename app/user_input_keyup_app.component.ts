import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<input (keyup)="onKey($event)">{{val}}'
})
export class AppComponent {
	val='';
	onKey(event:KeyboardEvent){
		this.val+=(event.key)+'|';
	}
}