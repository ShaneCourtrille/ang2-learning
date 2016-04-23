import {Component, Input, OnChanges, SimpleChange, ChangeDetectionStrategy} from 'angular2/core';
import {Entity} from './entity';

@Component({
    selector: 'on-change-child',
    template: `
    <div>Text Value: {{textValue}}</div>
    <div>Object Value: {{entityValue}}</div>
    <div>Numeric Value: {{numericValue}}</div>
    `,
    // tells Ang2 that this component only changes when an @Input changes
    changeDetection: ChangeDetectionStrategy.OnPush 
})
export class OnChangeChildComponent implements OnChanges
{
    @Input() textValue: string;
    
    @Input() entityValue: Entity;
    
    @Input() numericValue: number;
    
    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        console.log(changes['textValue']);
        //entityValue will not get updated as OnChange doesn't detect deep changes 
        console.log(changes['entityValue']);
        console.log(changes['numericValue']);
    }   
}
