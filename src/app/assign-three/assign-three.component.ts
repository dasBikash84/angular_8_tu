import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-three',
  templateUrl: './assign-three.component.html',
  styleUrls: ['./assign-three.component.css']
})
export class AssignThreeComponent implements OnInit {
  displayDetails:Boolean = true;
  actionLog:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  toggleDetailsView(){
    this.displayDetails = !this.displayDetails;
    this.actionLog.push("Details display set to "+this.displayDetails+" on "+new Date().toString());
  }

  getBg(index:number):string{
    return index>=4 ? "blue" :"yellow";
  }

  isWhiteText(i:number):Boolean{
    return i>=4;
  }

  isBlueText(i:number):Boolean{
    return i<4;
  }
}
