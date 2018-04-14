import { Component, OnInit } from '@angular/core';
import {SkillService} from '../skill.service';
import {Skill} from '../skill';
import {Http, Headers} from '@angular/http';

@Component({
  selector: 'app-skill-search',
  templateUrl: './skill-search.component.html',
  styleUrls: ['./skill-search.component.css'],
  providers: [SkillService]
})
export class SkillSearchComponent implements OnInit {
    skillSearch: Skill[];
    foundSkill: Skill;
    skillName: String;
    status: string;
    show: Boolean;
    highlight: Skill = {
        skillName: "",
        status:""
    };
  constructor(private skillService: SkillService) { }

    hideDrop()
    {
        this.show = false;
    }
    showDrop()
    {
        this.show = true;
    }

    findSkill(query:any)
    {
        var skillSearch = this.skillSearch;
        if(query){
        this.skillService.findSkill(query).subscribe(foundSkill=>{
            this.skillSearch = foundSkill;
    });}else{
            this.skillService.getSkillss().subscribe(skillSearch=> this.skillSearch = skillSearch);
        }
    }
      ngOnInit() {
      }
}
