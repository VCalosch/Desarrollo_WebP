import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  zoom: number = 17;
  lat: number = 43.473161;
  lng: number = -3.782128;
  color: string = "red";

  paths: number[]=[
      { lat: 43.472077, lng: -3.780953 },
      { lat: 43.472739, lng: -3.781039 },
      { lat: 43.472498, lng: -3.780164 },
      { lat: 43.472023, lng: -3.780363 }
    ];

}
