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

this.ActuacionesActivas = new FormGroup({
  'Actuacion': new FormControl('', Validators.required),
})

this.ActuacionesReactivas = new FormGroup({
  'Actuacion': new FormControl('', Validators.required),
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

  ActuacionesActivas1:String[]=["COLOCAR-CAMBIAR BANDERA DE ESTADO MAR", "DETECTAR-MARCAR LUGARES PELIGROSOS", "REALIZAR VIGILANCIA A GRUPOS ESPECIALES",
                               "RETIRAR OBJETOS PELIGROSOS EN ORILLA", "AVISO A PROFESORES DE ACTIVIDADES"];


  ActuacionesActivas2:String[]=["AVISOS COLECTIVOS", "AVISOS GENERALES POR MEGAFONÍA RELACIONADOS CON EL", "RETIRAR ANIMALES MUERTOS EN AGUA-ORILLA",
                                "DETECTAR-MARCAR LUGARES PELIGROSOS"];

ActuacionesReactivas1:String[]=["INFORMAR DE ZONAS NO APTAS PARA BAÑO", "INFORMAR SOBRE HORARIO DE MAREAS", "UTILIZAR PULSERAS DE IDENTIFICACION",
                               "AVISO A PERSONAS DE RIESGO POTENCIAL", "INFORMAR DE LA ZONA EXTERNA DE BAÑO", "NO NADAR FUERA DE ZONA VIGILADA",
                               "EVITAR ACTIVIDAD PELIGROSA EN ZONA BAÑO", "NO UTILIZAR MATERIALES PELIGROSOS", "NO REALIZAR JUEGOS DESCONTROLADOS",
                               "NO SALTAR EN ZONA POCO PROFUNDA", "NO DEJAR SOLO A UN MENOR", "INFORMAR SOBRE CORRIENTES CON RIESGOS",
                               "INFORMAR SOBRE MEDUSAS EN ZONA DE BAÑO", "NO UTILIZAR MATERIALES PELIGROSOS", "NO REALIZAR JUEGOS DESCONTROLADOS"];

 ActuacionesReactivas2:String[]=["INFORMAR SOBRE PROHIBICIÓN DE PERROS", "INFORMAR DEL INDICE DE RIESGO SOLAR", "NO ALEJARSE EXCESIVAMENTE DE LA ORILLA",
                              "EVITAR PESCA EN ZONA DE BAÑO", "NO NADAR FUERA DEL BALIZAMIENTO", "NO NADAR EN ZONAS DE EMBARCACIONES", "NO ENTRAR AL AGUA SIN CONTROL",
                              "NO REALIZAR APNEAS PROLONGADAS", "NO USAR CHANCLAS O CALZADO ADECUADO", "NO TENER OBJETOS EN LA BOCA", "INFORMAR SOBRE TEMPERATURA DEL AGUA",
                              "INFORMAR SOBRE OLEAJE PELIGROSO", "NO REALIZAR ZAMBULLIDAS PELIGROSAS", "EVITAR BAÑO SOLITARIO DE NIÑOS PEQUEÑOS"];


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

//------------------Formulario: AGREGAR AVISOS PREVENTIVOS------------------------------------------------------------

  ActuacionesActivas:FormGroup;
  C_ActuacionesActivas(){
    console.log(this.ActuacionesActivas.value);
  }

  ActuacionesReactivas:FormGroup;
  C_ActuacionesReactivas(){
    console.log(this.ActuacionesReactivas.value);
  }

  DatosActivos(x:string){
    this.ActuacionesActivas.controls['Actuacion'].setValue(x);
    console.log(this.ActuacionesActivas.value);
  }

  DatosReactivos(x:string){
    this.ActuacionesReactivas.controls['Actuacion'].setValue(x);
    console.log(this.ActuacionesReactivas.value);
  }


  }
