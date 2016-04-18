import {Component} from 'angular2/core'
import {ProjectListComponent} from './projects/project-list.component';

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ProjectListComponent]
})

export class AppComponent { }