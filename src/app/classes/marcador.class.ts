export class Marcador{

  public lat: number;
  public lng: number;
  public title: string = 'Test';
  public descripcion: string = 'Testtt';

  constructor(lat:number, lng:number){
    this.lat = lat;
    this.lng = lng;
  }
}
