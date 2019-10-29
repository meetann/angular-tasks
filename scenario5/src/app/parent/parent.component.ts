import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  @Output() public parentEvent = new EventEmitter();

  sendToGrand(value){
    this.parentEvent.emit("From parent: " +value);
  }

  public message="";
  getFromChild(message: string){
    this.message=message;
  }
  
  ngOnInit() {
  }

}
