import {Component} from 'angular2/core';
import {Entity} from './entity';
import {OnChangeComponent} from './on-change.component';

@Component({
    selector: 'my-app',
    directives: [OnChangeComponent],
    templateUrl: '/app/app.component.html'
})
export class AppComponent {
}