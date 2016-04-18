import {Component, ViewChild} from 'angular2/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'project-editor',
    directives: [MODAL_DIRECTIVES],
    template: `
    <modal #modal>
        <modal-header [show-close]="true">
            <h4 class="modal-title">Project Editor</h4>
        </modal-header>
        <modal-body>
            Hello World!
        </modal-body>
        <modal-footer [show-default-buttons]="true"></modal-footer>
    </modal>
    `
})
export class ProjectEditorModalComponent
{
    @ViewChild('modal')
    modal: ModalComponent;
    
    open(){
        this.modal.open();
    }
    
    close(){
        this.modal.close();
    }
}