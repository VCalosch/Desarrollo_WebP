import { Component, OnInit } from '@angular/core';
import { SelectsService } from '../../../../servicios/selects.service';


@Component({
  selector: 'app-socorrista-vista',
  templateUrl: './socorrista-vista.component.html',
  styleUrls: ['./socorrista-vista.component.css']
})
export class SocorristaVistaComponent implements OnInit {

  Paises:string[]=[];

  constructor(private _selectsService:SelectsService) { }

  ngOnInit() {
    this.Paises=this._selectsService.getPaises();
  }

}
