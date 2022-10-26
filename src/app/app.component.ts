import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <app-diretivas-atributos>
      <h1> Cabeçalho</h1>
      <h2> Rodapé</h2>
    </app-diretivas-atributos>
    <router-outlet></router-outlet>
    ` 
})
export class AppComponent implements OnInit {

  constructor() {}
  
  ngOnInit(): void { }
  
}
