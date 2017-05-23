import {Injectable} from '@angular/core';
import {COUNTRIES} from './country.contacts';

@Injectable()
export class CountryService{
	getContacts(){
		return Promise.resolve( COUNTRIES );
	}
}