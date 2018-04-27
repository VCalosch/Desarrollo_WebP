import { Component, OnInit } from '@angular/core';
import { Marcador } from 'app/classes/marcador.class';
import { Poligono } from 'app/classes/poligonos.class';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  zoom: number = 17;
  lats: number = 43.473161;
  lngs: number = -3.782128;
  color: string = "red";

  v1:number;

  numbers1: any=[
      { lat: 43.477254, lng: -3.780953 },
      { lat: 43.472739, lng: -3.781039 },
      { lat: 43.472498, lng: -3.780164 },
      { lat: 43.472023, lng: -3.780363 }
    ];

    marcadores:Marcador[]=[];

  constructor() {

    const nuevoMarcador = new Marcador(43.473161, -3.782128);
    this.marcadores.push(nuevoMarcador);

  }



  ngOnInit() {
  }
  variable:number=1;

  /*setValue(evento){
    const coords = evento.coords;
    if(this.variable == 1){
        const nuevoMarcador = new Marcador(coords.lat, coords.lng);
        this.marcadores.push(nuevoMarcador);
        this.variable = 0;
      }
  }

  ff(event){
    console.log(event);
  }*/

  puntos:any=[];
  contador:number=0;
  latitud:number;
  longitud:number;

  lista:number[]=[];


  paths:number[]=[];

  numeros:any[]=[];
  list:object[lat, lng]=[];

  poligono(evento){

  /*this.numeros=[
    { lat: evento.coords.lat, lng: evento.coords.lng },
    { lat: 43.472739, lng: -3.781039 }
  ];*/


  this.list = {lat: evento.coords.lat, lng: evento.coords.lng};
  this.numeros.push(this.list);
  console.log(this.numeros);

  this.contador++;



    /*this.latitud=evento.coords.lat;
    this.longitud=evento.coords.lng;
    this.lista = [this.latitud, this.longitud];
    console.log(this.lista);
    this.puntos.push(this.lista);

    //console.log("longitud:"+this.puntos.length);
    if(this.puntos.length==5){
      this.contador=1;
    }*/

    /*this.v1 = JSON.parse(evento.coords.lat);

    this.contador++;

    this.paths =[
        { lat: this.v1, lng: -3.780953 },
        { lat: 43.472739, lng: -3.781039 },
        { lat: 43.472498, lng: -3.780164 },
        { lat: 43.472023, lng: -3.780363 }
      ];
      console.log(this.paths);

    /*if(this.contador==4){
      this.lista = [
          { lat: 43.472077, lng: -3.780953 },
          { lat: 43.472739, lng: -3.781039 },
          { lat: 43.472498, lng: -3.780164 },
          { lat: 43.472023, lng: -3.780363 }
        ];
    }*/
  }

}
