import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome:string,idade:number}> = [
    { nome:"Nome 1", idade: 1},
    { nome:"Nome 2", idade: 2},
    { nome:"Nome 3", idade: 3}
  ];
  
  public getDados(event: number){
    this.enviarDados.emit(this.list[event]);
    console.log(this.list[event]);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
