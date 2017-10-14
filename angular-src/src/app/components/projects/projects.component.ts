import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../services/project-interface';
import {  Router }    from '@angular/router';
import { TruncatePipe } from '../../services/trunc.pipe';

@Component({
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
 //   pipes: [TruncatePipe]
})

export class ProjectsComponent implements OnInit { 

    projects: Project[];

    constructor ( public _projectService: ProjectService, public router: Router ) {}

    chooseProject(project){
  //      this.router.navigate(['detail', project.id]);
    }

    ngOnInit() { 
//        this._projectService.getProjects().then(projects => this.projects = projects);
    }

}