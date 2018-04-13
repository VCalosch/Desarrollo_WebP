import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  //public condiciones = {probabilidad: '', severidad: ''};

  //public variables = [{var: 'Baja'}, {var: 'Media'}, {var: 'Alta'}];

  variable:number=0;
  usuario:Object={
    nombre: null,
    apellido: null,
    correo: null,
    pais: null
  }

json:string;

  siguiente(forma:any){
    if(this.variable<4)
    this.variable = this.variable+1;
    console.log(this.variable);
    console.log("Valores", forma.value);
  }

  anterior(){
    if(this.variable>0)
    this.variable = this.variable-1;
    console.log(this.variable);
  }

  guardar(forma:any){
    this.json = JSON.stringify(this.usuario);
    console.log(forma);
    console.log("Valores", forma.value);

  }

  test(){
    console.log("sss");
  }

  /*if(this.confirmacion == true){
    this.confirmacion = false;
  }*/

  constructor() { }

  ngOnInit() {

  }

}
