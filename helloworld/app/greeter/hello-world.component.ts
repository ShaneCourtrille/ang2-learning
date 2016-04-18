import {Component} from 'angular2/core';

@Component({
    selector: 'hello-world',
    template:`<div><label for="name">Name:</label></div>
    <div><input id="name" [(ngModel)]="userName"></div>
    <hr>
    <input type="button" value="Say Hello" (click)="sayHello()">`
 })
export class HelloWorldComponent
{
    userName: string;
    
    constructor() { }
    
    sayHello() {
        console.log('Saying Hello');
        
        let msg = `Hello ${this.userName}`;
        
        alert(msg);
    }
}