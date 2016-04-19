import {Component, ViewChild, OnInit} from 'angular2/core';
import {Project} from './project';
import {ProjectService} from './project.service';
import {ProjectEditorModalComponent} from './project-editor.component'

@Component({
    selector: 'project-list',
    templateUrl: '/app/projects/project-list.component.html',
    directives: [ProjectEditorModalComponent],
    providers: [ProjectService]
})
export class ProjectListComponent implements OnInit { 
    @ViewChild(ProjectEditorModalComponent)
    modal: ProjectEditorModalComponent;
    
    projects: Project[] = [];
    selectedProject: Project;
    
    constructor(private _projectService: ProjectService) { }
    
    editProject(project: Project) {
        this.selectedProject = project;
        this.modal.open();
    }
    
    newProject() {
        let project = new Project('', 'Not Started');
        
        this.projects.push(project);
        
        this.selectedProject = project;
        this.modal.open();
    }
    
    ngOnInit() {
        this._projectService.getProjects().then(projects => this.projects = projects);
    }
}