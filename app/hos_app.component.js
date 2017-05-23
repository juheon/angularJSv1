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
var hos_skill_service_component_1 = require("./hos_skill_service.component");
var AppComponent = (function () {
    function AppComponent(_SkillService) {
        this._SkillService = _SkillService;
        this.id = "maeng425";
        this.level = 1;
        this.selectedSkillLv1 = "";
        this.selectedSkillLv2 = "";
        this.selectedSkillLv5 = "";
        this.selectedSkillLv8 = "";
        this.submit = false;
    }
    AppComponent.prototype.onAnalyze = function () {
        this.submit = true;
    };
    AppComponent.prototype.onBack = function () {
        this.submit = false;
    };
    AppComponent.prototype.getSkills = function () {
        var _this = this;
        this._SkillService.getSkills(1).then(function (skills) { return _this.skillsLv1 = skills; });
        this._SkillService.getSkills(2).then(function (skills) { return _this.skillsLv2 = skills; });
        this._SkillService.getSkills(5).then(function (skills) { return _this.skillsLv5 = skills; });
        this._SkillService.getSkills(8).then(function (skills) { return _this.skillsLv8 = skills; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getSkills();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/hos-view.component.html',
            providers: [hos_skill_service_component_1.SkillService]
        }), 
        __metadata('design:paramtypes', [hos_skill_service_component_1.SkillService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=hos_app.component.js.map