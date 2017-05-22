import { Component } from '@angular/core';
import { ItemComponent } from './item-list.component';
@Component({
  selector: 'my-app',
  template: '<my-list></my-list>',
  directives:[ItemComponent]
})
export class AppComponent {}