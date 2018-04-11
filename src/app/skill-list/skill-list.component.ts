import { Component, OnInit } from '@angular/core';
import {SkillService} from '../skill.service';
import {Skill} from '../skill';
import {Http, Headers} from '@angular/http';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css'],
  providers: [SkillService]
})
export class SkillListComponent implements OnInit {
    skills: Skill[];
    skill: Skill;
    skillName: String;
    status: string;
  constructor(private skillService: SkillService) { }

deleteSkill(id:any)
{
    var skills = this.skills;
    this.skillService.deleteSkill(id).subscribe(data=>{
       if(data)
        {
            for(var i=0;i< skills.length;i++)
                {
                    if(skills[i]._id== id)
                        {
                            skills.splice(i,1);
                        }
                }
        }
        
    });
    this.skillService.getSkills().subscribe(skills=>{ 
        this.skills = skills;
        this.skillService.getSkills().subscribe(skills=> this.skills = skills);});
}


addSkill()
{
    const newSkill ={
        skillName: this.skillName,
        status: this.status
    };
    this.skillService.addSkill(newSkill).subscribe(skill=>{
        this.skills.push(skill);
        this.skillService.getSkills().subscribe(skills=> this.skills = skills);
    });
}
  ngOnInit() {
      this.skillService.getSkills().subscribe(skills=> this.skills = skills);
  }

}

