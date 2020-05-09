import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  private lastNumber = 0;
  @Output() numberEmitter = new EventEmitter<number>();

  intervalVar?:NodeJS.Timeout = null;
  
  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    this.intervalVar = setInterval(()=>{
      this.lastNumber++;
      this.numberEmitter.emit(this.lastNumber);
    }, 1000);
  }

  stopGame(){
    clearInterval(this.intervalVar);
    this.intervalVar = null;
  }

}
