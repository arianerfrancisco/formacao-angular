import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
   <app-input [contador]="addValue"></app-input>
   <br>
    <button (click)="Add()">Add Value</button>
  <router-outlet></router-outlet>
    ` 
})
export class AppComponent implements OnInit {

  public destruir: boolean = true;

  public addValue: number = 0;

  public Add(){
    this.addValue ++;
  }

  constructor() {}
  
  ngOnInit(): void { }
  
}
