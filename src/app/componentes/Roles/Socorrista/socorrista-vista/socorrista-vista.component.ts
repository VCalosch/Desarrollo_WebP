import { Component, OnInit } from '@angular/core';
import { SelectsService } from '../../../../servicios/selects.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-socorrista-vista',
  templateUrl: './socorrista-vista.component.html',
  styleUrls: ['./socorrista-vista.component.css']
})
export class SocorristaVistaComponent implements OnInit {

  Paises:string[]=[];

  constructor(private _selectsService:SelectsService) {

    this.RegistrarIncedentes1 = new FormGroup({
      'NombreSuceso': new FormControl('', Validators.required),
  })

  this.RegistrarIncedentes2 = new FormGroup({
    'Sexo': new FormControl('', Validators.required),
    'Edad': new FormControl('', Validators.required),
    'Paises': new FormControl('', Validators.required),
    'Actividad': new FormControl('', Validators.required)
})





   }

  ngOnInit() {
this.Paises=this._selectsService.getPaises();
  }

  ValoresActividad:String[]=["Baño en Reposo", "Juegos en el Agua", "Juegos en el Agua", "Natación Recreativa", "Entrenamiento",
                             "Natación Competitiva", "Bueceo Recreativo (Sin Botella)", "Bueceo Recreativo (Con Botella)", "Buceo Profesional",
                             "Pesca desde Playa", "Pesca desde Roca", "Pesca desde Embarcación", "Paseo-caída", "Transporte Acuático",
                             "Transporte no Acuático", "Embarcación de Vela", "Embarcación a Parapente", "Esquí Acuático", "Surf", "Padel Surf",
                             "No relevante", "Otras", "Pesca con Arpón"];

  Sexo:String[]=["Hombre", "Mujer", "Otro"];
  Edad:String[]=["0-1", "1-4", "5-9", "10-14", "15-19", "20-24", "25-44", "45+"];

//---------------------Formulario: REGISTRAR INCIDENTES/INTERVENCIONES---------------------------------------------------------
RegistrarIncedentes:number=0;
//Paso#1
  RegistrarIncedentes1:FormGroup;
  C_RegistrarIncedentes1(){
    console.log(this.RegistrarIncedentes1.value);
    this.siguienteRegistrarIncedentes1();
  }

  siguienteRegistrarIncedentes1(){
  if(this.RegistrarIncedentes<1)
  this.RegistrarIncedentes = this.RegistrarIncedentes+1;
  console.log(this.RegistrarIncedentes);
  }

  anteriorRegistrarIncedentes(){
  if(this.RegistrarIncedentes>0)
  this.RegistrarIncedentes = this.RegistrarIncedentes-1;
  console.log(this.RegistrarIncedentes);
  }

//Paso#2
  RegistrarIncedentes2:FormGroup;

  C_RegistrarIncedentes2(){
    console.log(this.RegistrarIncedentes2.value);
  }


  }

}
