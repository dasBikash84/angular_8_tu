import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-cock-pit',
  templateUrl: './cock-pit.component.html',
  styleUrls: ['./cock-pit.component.css']
})
export class CockPitComponent implements OnInit {

  @Output() addItemEvent = new EventEmitter<Server>()

  @ViewChild('serverContentInput') newServerContent:ElementRef;

  onAddServer(newServerName:HTMLInputElement) {

    this.addItemEvent.emit({
      type: 'server',
      name: newServerName.value,
      content: this.newServerContent.nativeElement.value
    });
  }

  onAddBlueprint(newServerName:HTMLInputElement) {
    this.addItemEvent.emit({
      type: 'blueprint',
      name: newServerName.value,
      content: this.newServerContent.nativeElement.value
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
