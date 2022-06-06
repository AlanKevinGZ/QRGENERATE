import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-generateqr',
  templateUrl: './generateqr.component.html',
  styleUrls: ['./generateqr.component.scss']
})
export class GenerateqrComponent implements OnInit {

  arrDatos:any=[];

  /* url:string='http://localhost:4200/';
  profile:string='';
  elementType=NgxQrcodeElementTypes.URL; */
  errorCorrectionValue=NgxQrcodeErrorCorrectionLevels.HIGH;
  value='';
  width = 1.5;
  height = 1.5;

  convertirJson!:string;

  constructor() { }

  ngOnInit(): void {
  }

  fileUp(e:any){
    /*  console.log(e.target.files); */
    let archivo=e.target.files[0];
    let fileRead=new FileReader();
    fileRead.readAsBinaryString(archivo);

    fileRead.onloadend=(event)=>{

      let datos=event.target?.result
      let workbook=XLSX.read(datos,{type:'binary'});
      workbook.SheetNames.forEach(sheet => {
        let data=XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
        /* console.log(data);  */
        this.convertirJson=JSON.stringify(data);
        /* console.log(this.convertirJson); */
        this.value=this.convertirJson;
        /* console.log(this.value); */
        this.arrDatos=this.value;
        /* console.log(this.arrDatos); */
        this.prueba(data);
      })
      /*  console.log(workbook);  */
    }
  }

   prueba(valor:any){
    this.arrDatos=valor;
    /* console.log(this.arrDatos); */
    this.arrDatos.forEach( (item:any,index:number) => {
     /*  console.log(item,index); */
      console.log(item);
    });
    /* for (let i = 0; i < this.arrDatos.length; i++) {
      console.log(this.arrDatos[i]);
      this.obj.ID=this.arrDatos[i].ID;
      this.value=JSON.stringify(this.obj);
      console.log(this.arrDatos);
      this.obj={
        ID:0,NOMBRE:'',FECHA:'',CODIGO:''
      }
    }
       */
   }
}
