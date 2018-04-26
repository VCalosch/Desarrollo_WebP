import { Component, OnInit } from '@angular/core';
import { Marcador } from 'app/classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  zoom: number = 17;
  lat: number = 43.473161;
  lng: number = -3.782128;
  color: string = "red";

  paths: any[]=[
      { lat: 43.472077, lng: -3.780953 },
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

  setValue(evento){
    const coords = evento.coords;
    if(this.variable == 1){
        const nuevoMarcador = new Marcador(coords.lat, coords.lng);
        this.marcadores.push(nuevoMarcador);
        this.variable = 0;
      }
  }

  ff(event){
    console.log(event);
  }

}
