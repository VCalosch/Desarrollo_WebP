import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';

//Servicios
import { SelectsService } from './servicios/selects.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/compartidos/navbar/navbar.component';
import { FooterComponent } from './componentes/compartidos/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';



import { EncargadoVistaComponent } from './componentes/Roles/Encargado/encargado-vista/encargado-vista.component';
import { CoordinadorGenerealComponent } from './componentes/roles/coordinador/coordinador-genereal/coordinador-genereal.component';
import { CoordinadorVistaComponent } from './componentes/Roles/Coordinador/coordinador-vista/coordinador-vista.component';
import { SocorristaVistaComponent } from './componentes/Roles/Socorrista/socorrista-vista/socorrista-vista.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { ResetPasswordComponent } from './componentes/reset-password/reset-password.component';

//Mapas
import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './componentes/mapa/mapa.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    EncargadoVistaComponent,
    CoordinadorGenerealComponent,
    CoordinadorVistaComponent,
    SocorristaVistaComponent,
    PruebaComponent,
    ResetPasswordComponent,
    MapaComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyA3d6OC5uV4aQlVClt97CEULYxOvY7b1GU'
})
  ],
  providers: [SelectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
