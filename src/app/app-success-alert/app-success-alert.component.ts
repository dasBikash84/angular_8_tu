import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-success-alert',
  templateUrl: './app-success-alert.component.html',
  styleUrls: ['./app-success-alert.component.css']
})
export class AppSuccessAlertComponent implements OnInit {

  buttonDisabled:Boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.buttonDisabled = false;
    },2000);
  }

  onViewClick(event:Event){
    console.log(event);
  }

}
