import {Component,Input,  OnChanges, SimpleChange} from 'angular2/core';
import {Entity} from './entity';

@Component({
    selector: 'on-change-child',
    template: `
    <div>Text Value: {{textValue}}</div>
    <div>Object Value: {{entityValue}}</div>
    <div>Numeric Value: {{numericValue}}</div>
    `
})
export class OnChangeChildComponent implements OnChanges
{
    @Input() textValue: string;
    
    @Input() entityValue: Entity;
    
    @Input() numericValue: number;
    
    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        console.log(changes['textValue']);
        console.log(changes['entityValue']);
        console.log(changes['numericValue']);
    }   
}
