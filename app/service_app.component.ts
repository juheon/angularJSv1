import { Component } from '@angular/core';
import {MyListComponent} from './service-list.component';
@Component({
  selector: 'my-app',
  template: '<country-list></country-list>',
  directives:[MyListComponent]
})
export class AppComponent {}