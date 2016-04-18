import {Component, ViewChild} from 'angular2/core';
import {Project} from './project';
import {ProjectEditorModalComponent} from './project-editor.component'

@Component({
    selector: 'project-list',
    templateUrl: '/app/projects/project-list.component.html',
    directives: [ProjectEditorModalComponent]
})
export class ProjectListComponent { 
    @ViewChild(ProjectEditorModalComponent)
    modal: ProjectEditorModalComponent;
    
    public projects: Project[] = [
        new Project('Form Template Example', 'Complete'),
        new Project('Model Template Example', 'Not Started')
    ];
    
    editProject(project: Project) {
        this.modal.open();
    }
}