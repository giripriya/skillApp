import { Component, OnInit } from '@angular/core';
import {SkillService} from '../skill.service';
import {Skill} from '../skill';
import {Http, Headers} from '@angular/http';
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

    private getIndexOfSkill = (skillId: String) => {
    return this.skills.findIndex((skill) => {
      return skill.id === skilltId;
    });
    }
    
    updateSkill(skill: Skill): void {
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
  updateSkill(evt : Event)
    {
        this.updateFlag(null);
        console.log(evt);
        
    }
  updateFlag(evt : Event) 
    {
        console.log(evt);
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
