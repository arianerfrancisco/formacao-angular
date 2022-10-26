import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  public nome:string = 'Tommy'
  public idade:number = 2
  public checkedDisabled: boolean = false
  public imgSrc: string="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2022/10/Cartoon-Booba-PNG.png"
  public imgTitle: string = "Imagem"
  public position: {x:number, y:number} = {x:0, y:0} 
  // idem: public position: any = {x:0, y:0} 

  public alertaInfo(valor:string){
    alert(valor)
  }

  public mouseInfo(valor:MouseEvent){
    console.log(valor)
  }

  public mouseMoveTeste(valor:MouseEvent){
    console.log(valor)
    this.position.x=valor.offsetX
    this.position.y=valor.offsetY
    // ao passar o mouse pela quadrado vermelho mostrará a posição do cursor
  }
  constructor() { }

  ngOnInit(): void {
  }

}
