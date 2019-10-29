import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Output() public childEvent = new EventEmitter();

  fireEvent(value){
    this.childEvent.emit("From child: "+ value)
  }

  ngOnInit() {
  }

}
