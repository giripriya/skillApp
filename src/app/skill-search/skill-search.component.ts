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
  constructor(private skillService: SkillService) { }


    findSkill(query:any)
    {
        var skillSearch = this.skillSearch;
        this.skillService.findSkill(query).then(foundSkill=>{
            this.skillSearch = foundSkill;
    });
    }
      ngOnInit() {
          this.skillService.getSkillss().subscribe(skillSearch=> this.skillSearch = skillSearch);
      }
}
