import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-qrdategenerate',
  templateUrl: './qrdategenerate.component.html',
  styleUrls: ['./qrdategenerate.component.scss']
})
export class QrdategenerateComponent implements OnInit {

  errorCorrectionValue=NgxQrcodeErrorCorrectionLevels.HIGH;
  value='';
  width = 2;
  height = 2;

  nombre='';
  edad='';
  email='';
  telfono='';

  bandera:boolean=false;
  resultado='';

  constructor() { }

  ngOnInit(): void {
  }

  agregar(e:Event){
    e.preventDefault();
    /* this.value=this.valor;
    console.log(this.valor); */
    this.resultado=`Nombre:${this.nombre}\nEdad:${this.edad}\nemail:${this.email}\nTelefono:${this.telfono}`
    this.value=this.resultado;
    this.bandera=true;
  }

}
