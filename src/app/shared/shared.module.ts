import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponenteComponent } from './new-componente/new-componente.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    NewComponenteComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewComponenteComponent,
    InputComponent
  ]
})
export class SharedModule { }
