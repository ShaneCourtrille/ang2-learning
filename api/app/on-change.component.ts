import {Component} from 'angular2/core';
import {OnChangeChildComponent} from './on-change-child.component';
import {Entity} from './entity';

@Component({
    selector: 'on-change',
    directives: [OnChangeChildComponent],
    template: `<h3>OnChanges</h3>
<on-change-child [textValue]="textValue" [entityValue]="entityValue" [numericValue]="numericValue"></on-change-child>

<button (click)="changeValues()">Change Values</button>
    `
})
export class OnChangeComponent {
    textValue: string = 'Text Value';
    entityValue: Entity  = new Entity(1, 'Entity');
    numericValue: number = 1;

    changeValues() {
        this.textValue = this.textValue + '1';
        this.numericValue = this.numericValue + 1;
        this.entityValue.name = this.entityValue.name + '1';
    }        
}