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
var hos_skills_db_1 = require("./hos_skills_db");
var SkillService = (function () {
    function SkillService() {
    }
    SkillService.prototype.getSkills = function (level) {
        if (level == 1)
            return Promise.resolve(hos_skills_db_1.COUNTRIESLV1);
        else if (level == 2)
            return Promise.resolve(hos_skills_db_1.COUNTRIESLV2);
        else if (level == 5)
            return Promise.resolve(hos_skills_db_1.COUNTRIESLV5);
        else if (level == 8)
            return Promise.resolve(hos_skills_db_1.COUNTRIESLV8);
        else
            return null;
    };
    SkillService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SkillService);
    return SkillService;
}());
exports.SkillService = SkillService;
//# sourceMappingURL=hos_skill_service.component.js.map