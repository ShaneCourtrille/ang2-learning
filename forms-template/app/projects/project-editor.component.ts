import {Component, ViewChild, Input} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {MODAL_DIRECTIVES, ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';
import {Project} from './project';

@Component({
    selector: 'project-editor',
    directives: [MODAL_DIRECTIVES],
    templateUrl: '/app/projects/project-editor.component.html'
})
export class ProjectEditorModalComponent
{
    @Input()
    project: Project;
    
    @ViewChild('modal')
    modal: ModalComponent;
    
    statuses: string[] = ['Not Started', 'In Progress', 'Complete'];
    cancelled: boolean = false;
    
    open(){
        this.cancelled = false;
        this.modal.open();
    }
    
    close(){
        this.modal.close();
    }
    
    
    get diagnostic() { return JSON.stringify(this.project); }
}