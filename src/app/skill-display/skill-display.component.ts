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

  hoverSkill(skill: Skill)
    {
      this.hoveredSkill = skill;
    }

  constructor( private skillService: SkillService) { }

  ngOnInit() {
      var skills= this.skills;
      this.skillService.getSkills().then((skills: Skill[])=>{
                this.skills= skills;
      });
  }

}
