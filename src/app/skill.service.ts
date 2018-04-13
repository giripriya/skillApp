import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Skill} from './skill';
import 'rxjs/add/operator/map';

@Injectable()
export class SkillService {

  constructor(private http: Http) { }
    private skillUrl='/api/skill';
    
     getSkills(): Promise<void | Skill[]> {
      return this.http.get(this.skillUrl+'s' || 'http://localhost:3000/api/skills')
                 .toPromise()
                 .then(response => response.json() as Skill[])
                 .catch(this.handleError);
    }
    updateSkill(putSkill: Skill): Promise<void | Skill> {
      var putUrl = this.skillUrl + '/' + putSkill._id;
      return this.http.put(putUrl, putSkill.skillName)
                 .toPromise()
                 .then(response => response.json() as Skill)
                 .catch(this.handleError);
    }


getSkillss()
      {
          return this.http.get(this.skillUrl+'s' || 'http://localhost:3000/api/skills').map(res=> res.json());
      }
       
    deleteSkill(id)
      {
            return this.http.delete(this.skillUrl+'/'+ id || 'http://localhost:3000/api/skill/'+ id);
      }
      
    addSkill(newSkill)
      {
            var headers = new Headers();
            headers.append('Content-Type','application/json');
            return this.http.post(this.skillUrl+'/' ||'http://localhost:3000/api/skill/',newSkill ,{headers:headers}).map(res=>res.json());
      }
    findSkill(query)
      {
        return this.http.get(this.skillUrl+'/'+query || 'http://localhost:3000/api/skill/'+query).map(res=> res.json());
      }
    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}


