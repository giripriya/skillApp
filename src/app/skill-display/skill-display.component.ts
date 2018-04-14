import { Component, OnInit, Input } from '@angular/core';
import {SkillService} from '../skill.service';
import {Skill} from '../skill';
import { NgStyle } from '@angular/common';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';

@Component({
  selector: 'app-skill-display',
  templateUrl: './skill-display.component.html',
  styleUrls: ['./skill-display.component.css'],
  providers: [SkillService]
})
export class SkillDisplayComponent implements OnInit {
  skills: Skill[];
  hoveredSkill: Skill;
  flag: Boolean = false;
  permission : Boolean = false;

   
    givePerm(Skill: Skill)
    {  
            if(this.highlight!=undefined)
            {
                if(this.highlight.hasOwnProperty('skillName'))
                    {
                        this.permission = Skill.skillName == this.highlight.skillName;
                    }
                else{
                    this.permission = false;
                }
            }
            else{
            this.permission = false;
            }
    }

    private getIndexOfSkill = (skillId: String) => {
    return this.skills.findIndex((skill) => {
      return skill.id === skillId;
    });
    }
    
    updateSkillStatus(skill: Skill, stat: String):void{
        skill.status=(skill.status===stat)?'s':stat;
        this.skillService.updateSkillStat(skill).then((updatedSkill: Skill) => {
            if(updatedSkill){
      this.updateSkillL(updatedSkill);
            }
            });
    }
    
    updateSkill(evt : Event, skill: Skill): void {
    this.updateFlag();
    this.skillService.updateSkill(skill).then((updatedSkill: Skill) => {
      this.updateSkillL(updatedSkill);
    });
    }
    
    
    updateSkillL = (skill: Skill) => {
    var idx = this.getIndexOfSkill(skill.id);
    if (idx !== -1) {
      this.skills[idx] = skill;
    }
    return this.skills;
    }
    
  hoverSkill(skill: Skill)
    {
      this.hoveredSkill = skill;
    }
  updateFlag() 
    {
        this.flag = !this.flag;
    }

  constructor( private skillService: SkillService) { }

  ngOnInit() {
      var skills= this.skills;
      this.skillService.getSkills().then((skills: Skill[])=>{
                this.skills= skills;
      });
  }

}
