import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-failure-alert]',
  templateUrl: './app-failure-alert.component.html',
  styleUrls: ['./app-failure-alert.component.css']
})
export class AppFailureAlertComponent implements OnInit {
  userName:String = ""
  constructor() { }

  ngOnInit(): void {
  }

}
