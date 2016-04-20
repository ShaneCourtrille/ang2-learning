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
        var projectToEdit = Object.assign({}, project)
        
        this.selectedProject = projectToEdit;
        this.modal.open();
    }
    
    newProject() {
        let project = new Project(-1, '', 'Not Started');
        
        this.selectedProject = project;
        this.modal.open();
    }
    
    saveProject(project: Project) {
        this._projectService.saveProject(project);
        
        this._refreshProjectList();
    }
    
    private _refreshProjectList()
    {
        this._projectService.getProjects().then(projects => this.projects = projects);
    }
    
    ngOnInit() {
        this._refreshProjectList();
    }
}