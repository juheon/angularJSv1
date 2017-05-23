import { Component, OnInit } from '@angular/core';
import { ContactComponent } from './contact-form.component';
import { SkillService } from "./hos_skill_service.component";
import { Skill } from "./hos_skill";

@Component({
  selector: 'my-app',
  templateUrl: 'app/hos-view.component.html',
  providers:[SkillService]
})
export class AppComponent implements OnInit{
    id="maeng425";
    level=1;
    
    selectedSkillLv1="";
    selectedSkillLv2="";
    selectedSkillLv5="";
    selectedSkillLv8="";

    submit=false;
    onAnalyze(){
        this.submit=true;
    }
    onBack(){
        this.submit=false;
    }
    
    public skillsLv1:Skill[];
    public skillsLv2:Skill[];
    public skillsLv5:Skill[];
    public skillsLv8:Skill[];
    constructor(private _SkillService:SkillService){}
    getSkills(){
        this._SkillService.getSkills(1).then( (skills:Skill[]) => this.skillsLv1 = skills );
        this._SkillService.getSkills(2).then( (skills:Skill[]) => this.skillsLv2 = skills );
        this._SkillService.getSkills(5).then( (skills:Skill[]) => this.skillsLv5 = skills );
        this._SkillService.getSkills(8).then( (skills:Skill[]) => this.skillsLv8 = skills );
    }
    ngOnInit():any{
        this.getSkills();
    }
    
}