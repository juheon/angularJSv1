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
var hos_skill_component_1 = require("./hos_skill.component");
var AppComponent = (function () {
    function AppComponent() {
        this.id = "maeng425";
        this.level = 1;
        this.__skillTypeSB = 1;
        this.__skillTypeDB = 2;
        this.__skillTypeTT = 3;
        this.__skillTypeUlt = 4;
        this.__skillTypeETC = 5;
        this.selectedSkillLv1 = "";
        this.selectedSkillLv2 = "";
        this.selectedSkillLv5 = "";
        this.selectedSkillLv8 = "";
        this.skillsLv1 = [new hos_skill_component_1.Skill("Compounding Aether", 1, this.__skillTypeSB), new hos_skill_component_1.Skill("Deep Breathing", 1, this.__skillTypeDB), new hos_skill_component_1.Skill("Timewalker's Pursuit", 1, this.__skillTypeETC)];
        this.skillsLv2 = [new hos_skill_component_1.Skill("Piercing Sands", 2, this.__skillTypeSB), new hos_skill_component_1.Skill("Bronze Talons", 2, this.__skillTypeETC), new hos_skill_component_1.Skill("Enveloping Assault", 2, this.__skillTypeDB)];
        this.skillsLv5 = [new hos_skill_component_1.Skill("Mobius Loop", 5, this.__skillTypeDB), new hos_skill_component_1.Skill("Dragon's Eye", 5, this.__skillTypeDB), new hos_skill_component_1.Skill("Chrono Sickness", 5, this.__skillTypeTT)];
        this.skillsLv8 = [new hos_skill_component_1.Skill("Slowing Sands", 8, this.__skillTypeUlt), new hos_skill_component_1.Skill("Temporal Loop", 8, this.__skillTypeUlt)];
        this.submit = false;
    }
    AppComponent.prototype.onAnalyze = function () {
        this.submit = true;
    };
    AppComponent.prototype.onBack = function () {
        this.submit = false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/hos-view.component.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=skill_service.component.js.map