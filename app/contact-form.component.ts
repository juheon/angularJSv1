import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { Contact } from './contact';
@Component({
  selector: 'contact-form',
  templateUrl: 'app/contact-form.component.html'
})
export class ContactComponent {
  countries = ['India', 'Australia', 'England', 'South Africa', 'USA', 'Japan', 'Singapore'];
  contact = new Contact('Ravi', 'Shankar', this.countries[0], 6445874544);
  submitted = false;
  onSubmit() { this.submitted = true; }
  active = true;
  newContact() {
    this.contact = new Contact('', '', this.countries[0], 6445874544);
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
}