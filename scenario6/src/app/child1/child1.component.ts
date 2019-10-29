import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  @Output() public childEvent = new EventEmitter();
  fireEvent(value){
    this.childEvent.emit("Hey from Fellow Child: "+value);
  }

  ngOnInit() {
  }

}
