import {Component, ViewChild, OnInit} from 'angular2/core';
import {Project} from './project';
import {ProjectService} from './project.service';
import {ProjectEditorModalComponent} from './project-editor.component';
import {ProjectCreatorModalComponent} from './project-creator.modal-component';

@Component({
    selector: 'project-list',
    templateUrl: '/app/projects/project-list.component.html',
    directives: [ProjectEditorModalComponent],
    providers: [ProjectService]
})
export class ProjectListComponent implements OnInit { 
    @ViewChild(ProjectEditorModalComponent)
    editModal: ProjectEditorModalComponent;
    
    @ViewChild(ProjectCreatorModalComponent)
    createModal: ProjectCreatorModalComponent
    
    projects: Project[] = [];
    selectedProject: Project;
    
    constructor(private _projectService: ProjectService) { }
    
    editProject(project: Project) {
        var projectToEdit = Object.assign({}, project)
        
        this.selectedProject = projectToEdit;
        this.editModal.open();
    }
    
    newProject() {
        this.createModal.open();
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