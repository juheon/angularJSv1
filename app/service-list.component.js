"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var country_service_1 = require('./country.service');
var MyListComponent = (function () {
    function MyListComponent(_countryService) {
        this._countryService = _countryService;
    }
    MyListComponent.prototype.getContacts = function () {
        var _this = this;
        this._countryService.getContacts().then(function (countries) { return _this.countries = countries; });
    };
    MyListComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    MyListComponent = __decorate([
        core_1.Component({
            selector: 'country-list',
            template: '<ul><li *ngFor="#coun of countries">{{coun.name}}</li></ul>',
            providers: [country_service_1.CountryService]
        }), 
        __metadata('design:paramtypes', [country_service_1.CountryService])
    ], MyListComponent);
    return MyListComponent;
}());
exports.MyListComponent = MyListComponent;
//# sourceMappingURL=service-list.component.js.map