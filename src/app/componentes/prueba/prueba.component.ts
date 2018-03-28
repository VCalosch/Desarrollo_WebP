import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  public condiciones = {probabilidad: '', severidad: ''};

  public variables = [{var: 'Baja'}, {var: 'Media'}, {var: 'Alta'}];

  test(){
    console.log("works");
  }

  constructor() { }

  ngOnInit() {
  }

}
