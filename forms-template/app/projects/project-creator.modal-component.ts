import {Component, ViewChild, EventEmitter, Output} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {MODAL_DIRECTIVES, ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';
import {Project} from './project';

@Component({
    selector: 'project-creator',
    directives: [MODAL_DIRECTIVES],
    templateUrl: '/app/projects/project-editor.component.html'
})
export class ProjectCreatorModalComponent
{
    @ViewChild('modal')
    modal: ModalComponent;
    
    @Output() saveRequest:EventEmitter<Project> = new EventEmitter<Project>();
    
    statuses: string[] = ['Not Started', 'In Progress', 'Complete'];
    model = new Project(-1, '', this.statuses[0]);
    saveAction: string = 'Create';
    title: string = 'Create New Project';
    
    open() {
        this.modal.open();
    }
    
    closed() {
        console.log('closed');
        this.saveRequest.emit(this.model);
    }
}