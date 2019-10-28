import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
              <input #id type="text" value={{userInput}}>
              <button (click)="onClick(id.value)" > Greet </button>
  
  `,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public userInput = "";
  onClick(value){
    console.log(value);
    }

  constructor() { }

  ngOnInit() {
  }

}
