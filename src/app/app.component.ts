import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  receivedNums:number[] = [];

  getEmittedNumber(event:number){
    console.log('received: '+event);
    this.receivedNums.push(event);
  }
}