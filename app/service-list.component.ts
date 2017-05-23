import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CountryService } from './country.service';
import { Country } from './country';

@Component({
  selector: 'country-list',
  template: '<ul><li *ngFor="#coun of countries">{{coun.name}}</li></ul>',
  providers: [CountryService]
})
export class MyListComponent{
    public countries : Country[];
    constructor(private _countryService: CountryService) {}

    getContacts(){
        this._countryService.getContacts().then((countries: Country[]) => this.countries = countries);
    }

    ngOnInit():any{
        this.getContacts();
    }
}