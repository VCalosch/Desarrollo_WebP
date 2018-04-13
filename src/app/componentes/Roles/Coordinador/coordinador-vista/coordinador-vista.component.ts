import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-coordinador-vista',
  templateUrl: './coordinador-vista.component.html',
  styleUrls: ['./coordinador-vista.component.css']
})
export class CoordinadorVistaComponent implements OnInit {

  constructor() {
    this.Paso2 = new FormGroup({
      'nombreRiesgo': new FormControl('', Validators.required),
    })

  }

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
  public variablesRiesgo = [{var: 'Baja'}, {var: 'Media'}, {var: 'Alta'}];

  Riesgo = {riesgo: ''};
  Riesgos:String[] = ["Rocas", "Corrientes", "Zona de Rompiente(Olas)", "Actividades Deportivas y de Recreo", "Zambullidas desde Ricas",
                      "Estructura Fondo de Zona de Baño", "Rayos UVA/Efectos del sol sobre el cuerpo", "Animales Acuáticos y terrestres",
                      "Arena", "Objetos hinchables/sombrillas voladizos", "Riesgos por alta afluencia de personas", "Acceso Embarcaciones",
                      "Condiciones meteorológicas y marinas", "Desprendimientos", "Focos Contaminación", "Morfología/accidentes geográficos",
                       "Acceso a Playas"];

//-------------------Variables Select: Viento --------------------------------

  Nudos = {nudo: ''};
  ValoresNudos:String[] = ["-1", "1 - 3", "4 - 6", "7 - 10", "11 - 16",
                           "17 - 21", "22 - 27", "28 - 33", "34 - 40",
                           "41 - 47", "48 - 55", "56 - 63", "+64"];

//-------------------Variables Select: Oleaje --------------------------------

  TipoOleaje = {tipo: ''};
  ValoresTipoOleaje:String[] = ["0 - 0,1", "0,1 - 0,5", "0,5 - 1,25",
                                "1,25 - 2,5", "2,5 - 4", "4 - 6", "6 - 9", "9 - 14", "+14"];

//-------------------Variables Select: Marea --------------------------------

//-------------------Variables Select: (Compartidas) --------------------------------




  guardarDatos(Paso1:any){
    console.log(Paso1)
  }

  dick(){
    console.log(this.Paso1)
  }


  /*-------------Formularios para Dar de Alta Riesgo----------------------*/
  Paso2:FormGroup;
  DarAltaRiesgo:number=0;

  siguiente(){
    if(this.DarAltaRiesgo<4)
    this.DarAltaRiesgo = this.DarAltaRiesgo+1;
  console.log(this.DarAltaRiesgo);
  }

  anterior(){
      if(this.DarAltaRiesgo>0)
      this.DarAltaRiesgo = this.DarAltaRiesgo-1;
    console.log(this.DarAltaRiesgo);
    }



  guardarCambios(){
    console.log(this.DarAltaRiesgo);
    console.log(this.Paso2.value);
    this.siguiente();
  }


}
