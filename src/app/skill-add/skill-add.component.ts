import { Component, OnInit, Input } from '@angular/core';
import {SkillService} from '../skill.service';
import {Skill} from '../skill';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-skill-add',
  templateUrl: './skill-add.component.html',
  styleUrls: ['./skill-add.component.css'],
  providers: [SkillService]
})
export class SkillAddComponent implements OnInit {
    
@Input:
Skills: Skill[];
 hoveredSkill: Skill;
 flag: Boolean = false;
toAddSkills: Skill[];
 
  constructor(private skillService: SkillService) { }
addSkill()
 {
     var toAddSkills = this.toAddSkills;
     var skill : Skill={
        skillName : "Skill Name",
        status : "notAdded"
     };
     toAddSkills.push(skill);
 }
 addSkillG(skill: Skill)
 {
     this.skillService.addSkill(skill).then(result:Skill=>{
         Skills.push(result);
     });
 }
  hoverSkill(skill: Skill)
    {
      this.hoveredSkill = skill;
    }
  updateFlag() 
    {
        this.flag = !this.flag;
    }
  ngOnInit() {
  }

}
