import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-failure-alert]',
  templateUrl: './app-failure-alert.component.html',
  styleUrls: ['./app-failure-alert.component.css']
})
export class AppFailureAlertComponent implements OnInit {

  inputTextValue:String = "";

  constructor() { }

  ngOnInit(): void {
  }

  onTextInput(event:Event){
    this.inputTextValue = (<HTMLInputElement>event.target).value;
  }

}
