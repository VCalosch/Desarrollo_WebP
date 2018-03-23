import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-coordinador-vista',
  templateUrl: './coordinador-vista.component.html',
  styleUrls: ['./coordinador-vista.component.css']
})
export class CoordinadorVistaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Paso1:Object{
    Municipio: null,
    Provincia: null,
    CCAA: null,
    Longitud: null,
    Anchura: null
  }

  guardarDatos(Paso1:any){
    console.log(Paso1)
  }

}
