import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition:boolean = true;
  public conditionClick:boolean = true;
  public list: Array<{nome: string, idade:number}> = [
    {nome: "Nome", idade:1},
    {nome: "Nome 2", idade:2},
    {nome: "Nome 3", idade:3}
  ];

  constructor() { }

  ngOnInit(): void {

    setInterval(()=> {
      if (this.condition){
        this.condition = false;
    } else {
      this.condition = true;
      }
    }, 5000)
  }
   
  public onClick() {
    if (this.condition){
      this.condition = false;
  } else {
    this.condition = true;
    }
  }
  
  //irá add item a lista ao clicar no botão Add
  public onClickAddList() {
    this.list.push({nome: "Nome", idade:4})
  }
  
  //Irá remover o item da lista ao clicar com o mouse
  public onClickEventList(event: number) {
    this.list.splice(event, 1)
  }

}