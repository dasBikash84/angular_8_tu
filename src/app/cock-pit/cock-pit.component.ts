import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-cock-pit',
  templateUrl: './cock-pit.component.html',
  styleUrls: ['./cock-pit.component.css']
})
export class CockPitComponent implements OnInit {

  @Output() addItemEvent = new EventEmitter<Server>()

  onAddServer(newServerName:HTMLInputElement,newServerContent:HTMLInputElement) {

    this.addItemEvent.emit({
      type: 'server',
      name: newServerName.value,
      content: newServerContent.value
    });
  }

  onAddBlueprint(newServerName:HTMLInputElement,newServerContent:HTMLInputElement) {
    this.addItemEvent.emit({
      type: 'blueprint',
      name: newServerName.value,
      content: newServerContent.value
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
