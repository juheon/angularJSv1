import { Injectable } from '@angular/core';
import { COUNTRIESLV1, COUNTRIESLV2, COUNTRIESLV5, COUNTRIESLV8 } from "./hos_skills_db";
@Injectable()
export class SkillService {
    getSkills(level:number){
        if(level==1) return Promise.resolve(COUNTRIESLV1);
        else if(level==2) return Promise.resolve(COUNTRIESLV2);
        else if(level==5) return Promise.resolve(COUNTRIESLV5);
        else if(level==8) return Promise.resolve(COUNTRIESLV8);
        else return null;
    }
}