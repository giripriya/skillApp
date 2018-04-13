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
    
@Input()
Skills: Skill[];

 hoveredSkill: Skill;
 flag: Boolean = false;
toAddSkills: Skill[];
 
  constructor(private skillService: SkillService) { }
private getIndexOfSkill = (skillId: String) => {
    return this.toAddSkills.findIndex((skill) => {
      return skill.id === skillId;
    });
    }
addSkill()
 {
     var id = this.toAddSkills ? this.toAddSkills.length.toString() : "0";
     var skill : Skill={
        id: id,
        skillName : "Skill Name",
        status : "notAdded"
     };
     this.toAddSkills.push(skill);
 }
 addSkillG(skill: Skill)
 {
     delete skill.id;
     var Skills = this.Skills;
     this.skillService.addSkill(skill).then((result:Skill)=>{
         Skills.push(result);
     });
 }
updateSkill = (skill: Skill) => {
    var idx = this.getIndexOfSkill(skill.id);
    if (idx !== -1) {
      this.toAddSkills[idx] = skill;
    }
    return this.toAddSkills;
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
