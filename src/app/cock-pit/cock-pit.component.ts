import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-cock-pit',
  templateUrl: './cock-pit.component.html',
  styleUrls: ['./cock-pit.component.css']
})
export class CockPitComponent implements OnInit {

  @Output() addItemEvent = new EventEmitter<Server>()

  newServerName = '';
  newServerContent = '';

  onAddServer() {

    this.addItemEvent.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.addItemEvent.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
