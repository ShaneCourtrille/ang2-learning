import {Component} from 'angular2/core';
import {HelloWorldComponent} from './greeter/hello-world.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello World Basic</h1>
    <hello-world></hello-world>
    `,
    directives: [HelloWorldComponent]
})

export class AppComponent { }