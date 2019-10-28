import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
  <input [(ngModel)]="twoWayBindName" type="text">
{{twoWayBindName}}
<br>
<h2> Works </h2>
`,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  public twoWayBindName ="";


  constructor() { }

  ngOnInit() {
  }

}
