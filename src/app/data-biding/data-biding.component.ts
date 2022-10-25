import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  public nome:string = 'Tommy'
  public idade:number = 2

  constructor() { }

  ngOnInit(): void {
  }

}
