import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../services/project-interface';

import { TruncatePipe } from '../../services/trunc.pipe';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  projects: Project[];
  constructor ( public router: Router ) {}
  
      chooseProject(project){
  //     this.router.navigate(['detail', project.id]);
      }
  
      ngOnInit() { 
    //    this._projectService.getProjects().then(projects => this.projects = projects);
      }
  

}
