import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Marcador } from 'app/classes/marcador.class';


@Component({
  selector: 'app-coordinador-genereal',
  templateUrl: './coordinador-genereal.component.html',
  styleUrls: ['./coordinador-genereal.component.css']
})
export class CoordinadorGenerealComponent implements OnInit {

  constructor() {

    this.SolicitarNuevaPlaya = new FormGroup({
      'NombrePlaya': new FormControl('', Validators.required),
      'CorreoElectronico': new FormControl('', Validators.required),
      'Latitud': new FormControl('', Validators.required),
      'Longitud': new FormControl('', Validators.required),
      'Comentarios': new FormControl('', Validators.required)
  })

    this.DarAltaNuevoUsuario = new FormGroup({
      'NombreUsuario': new FormControl('', Validators.required),
      'Password': new FormControl('', Validators.required),
      'RolUsuario': new FormControl('', Validators.required),
      'Sexo': new FormControl('', Validators.required),
      'CorreoElectronico': new FormControl('', Validators.required),
      'Codigo': new FormControl('', Validators.required),
      'InicioContrato': new FormControl('', Validators.required),
      'Formacion': new FormControl('', Validators.required),
      'Experiencia': new FormControl('', Validators.required),
      'Comentarios': new FormControl('', Validators.required)
  })


   }

  ngOnInit() {
  }

  //-------------------Variables Select: Sexo --------------------------------

    Sexo:String[] = ["Hombre", "Mujer", "Otro"];

  //-------------------Variables Select: Roles --------------------------------

    ValoresRol:String[] = ["Encargado de Playa", "Socorrista"];

  //-----------------------Formulario SOLICITAR UNA NUEVA PLAYA-----------------------------------------------------

  SolicitarNuevaPlaya:FormGroup;
  C_SolicitarNuevaPlaya(){
    console.log(this.SolicitarNuevaPlaya.value);
  }

 //-----------------------Formulario DAR DE ALTA A UN NUEVO USUARIO------------------------------------------------------
 DarAltaNuevoUsuario:FormGroup;
 C_DarAltaNuevoUsuario(){
   console.log(this.DarAltaNuevoUsuario.value);
 }

 //-------------------------------MAPA----------------------------------------------

 marcadores:Marcador[]=[];

 marcadorRiesgo:number=1;
 placeHolderLatitud:string='Latitud';
 placeHolderLongitud:string='Longitud';

 setValue(evento){
   const coords = evento.coords;
   if(this.marcadorRiesgo == 1){
       const nuevoMarcador = new Marcador(coords.lat, coords.lng);
       this.marcadores.push(nuevoMarcador);
       this.SolicitarNuevaPlaya.controls['Latitud'].setValue(coords.lat);
       this.SolicitarNuevaPlaya.controls['Longitud'].setValue(coords.lng);
       this.marcadorRiesgo = 0;

       this.placeHolderLatitud = coords.lat;
       this.placeHolderLongitud = coords.lng;
     }
 }

 zoom: number = 10;
 lat: number = 43.473161;
 lng: number = -3.782128;

}
