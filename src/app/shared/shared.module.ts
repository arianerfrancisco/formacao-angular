import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponenteComponent } from './new-componente/new-componente.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';



@NgModule({
  declarations: [
    NewComponenteComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewComponenteComponent,
    InputComponent,
    OutputComponent
  ]
})
export class SharedModule { }
