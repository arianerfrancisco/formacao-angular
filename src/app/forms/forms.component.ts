import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public listaCarros: Array<{carro: string}>=
  [
    {carro: 'Mercedes'},
    {carro: 'Ferrari'},
    {carro:'Fusca'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: NgForm){
    console.log(form.value)
  }
}
