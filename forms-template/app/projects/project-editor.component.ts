import {Component, ViewChild, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChange} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {MODAL_DIRECTIVES, ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';
import {Project} from './project';

@Component({
    selector: 'project-editor',
    directives: [MODAL_DIRECTIVES],
    templateUrl: '/app/projects/project-editor.component.html'
})
export class ProjectEditorModalComponent implements OnChanges
{
    @Input()
    project: Project;
    
    @ViewChild('modal')
    modal: ModalComponent;
    
    saveAction: string = 'Save';
    title: string;
    
    @Output() 
    saveRequest:EventEmitter<Project> = new EventEmitter<Project>();
    
    statuses: string[] = ['Not Started', 'In Progress', 'Complete'];
    
    closed() {
        console.log('closed');
        this.saveRequest.emit(this.project);
        this.project = null;
    }
    
    dismissed() {
    }
    
    open() {
        this.modal.open();
    }
    
    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        if(changes['project'] !== null)
        {
            this._setTitle();
        }
    }
    
    _setTitle() {
        this.title = this.project && `Editing ${this.project.name}` || 'Editing';
    }
}