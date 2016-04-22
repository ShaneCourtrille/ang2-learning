import {Component, ViewChild, Input, EventEmitter, Output, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {MODAL_DIRECTIVES, ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';
import {Project} from './project';

@Component({
    selector: 'project-editor',
    directives: [MODAL_DIRECTIVES],
    templateUrl: '/app/projects/project-editor.component.html'
})
export class ProjectEditorModalComponent implements OnInit
{
    @Input()
    project: Project;
    
    @ViewChild('modal')
    modal: ModalComponent;
    
    saveAction: string;
    
    @Output() saveRequest:EventEmitter<Project> = new EventEmitter<Project>();
    
    statuses: string[] = ['Not Started', 'In Progress', 'Complete'];
    
    open() {
        this.modal.open();
    }
    
    closed() {
        this.saveRequest.emit(this.project);
    }
    
    ngOnInit() {
        if(this.project.id == -1
        {
            this.saveAction = "Create";
        } else {
            this.saveAction = "Save";
        }
    }
    
    dismissed() {
    }
}