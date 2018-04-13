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


  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    ReactiveFormsModule
  ],
  providers: [SelectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
