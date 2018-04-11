import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Skill} from './skill';
import 'rxjs/add/operator/map';

@Injectable()
export class SkillService {

  constructor(private http: Http) { }
    private skillUrl='/api/skill';
    
     getSkills()
      {
          return this.http.get(this.skillUrl+'s' || 'http://localhost:3000/api/skills').map(res=> res.json());
      }
      
    deleteSkill(id)
      {
            return this.http.delete(this.skillUrl+'/' || 'http://localhost:3000/api/skill/'+ id);
      }
      
    addSkill(newSkill)
      {
            var headers = new Headers();
            headers.append('Content-Type','application/json');
            return this.http.post(this.skillUrl+'/' ||'http://localhost:3000/api/skill/',newSkill ,{headers:headers}).map(res=>res.json());
      }
    findSkill(query)
      {
        return this.http.get(this.skillUrl+'/' || 'http://localhost:3000/api/skill/'+query).map(res=> res.json());
      }
}


