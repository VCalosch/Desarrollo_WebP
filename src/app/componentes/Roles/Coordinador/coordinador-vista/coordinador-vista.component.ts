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

  Paso1:Object={
    Municipio: null,
    Provincia: null,
    CCAA: null,
    Longitud: null,
    Anchura: null,
    Acepta: false,
  }


//Objetos de "Dat de Alta un Riesgo"

  Situacion:Object={
    Existe: false,
    Viento: false,
    Oleaje: false,
    Marea: false,
    variable: null
  }

  variables = [{
    codigo: "B",
    nombre: "Baja"
  },
  {
    codigo: "M",
    nombre: "Media"
  },
  {
    codigo: "A",
    nombre: "Alta"
  }]

  usuario:Object={
    nombre: null,
    apellido: null,
    correo: null,

  }

  public condiciones = {probabilidad: '', severidad: ''};
  public variables = [{var: 'Baja'}, {var: 'Media'}, {var: 'Alta'}];

  Riesgo = {riesgo: ''};
  Riesgos:String[] = ["Rocas", "Corrientes", "Zona de Rompiente(Olas)", "Actividades Deportivas y de Recreo", "Zambullidas desde Ricas",
                      "Estructura Fondo de Zona de Baño", "Rayos UVA/Efectos del sol sobre el cuerpo", "Animales Acuáticos y terrestres",
                      "Arena", "Objetos hinchables/sombrillas voladizos, ""Riesgos por alta afluencia de personas", "Acceso Embarcaciones",
                      "Condiciones meteorológicas y marinas", "Desprendimientos", "Focos Contaminación", "Morfología/accidentes geográficos",
                       "Acceso a Playas"];


  guardarDatos(Paso1:any){
    console.log(Paso1)
  }

  dick(){
    console.log(this.Paso1)
  }


}
