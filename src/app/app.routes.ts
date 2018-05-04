import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/compartidos/navbar/navbar.component';
import { FooterComponent } from './componentes/compartidos/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { ResetPasswordComponent } from './componentes/reset-password/reset-password.component';


//Roles
import { CoordinadorGenerealComponent } from './componentes/roles/coordinador/coordinador-genereal/coordinador-genereal.component';
import { CoordinadorVistaComponent } from './componentes/Roles/Coordinador/coordinador-vista/coordinador-vista.component';
import { EncargadoVistaComponent } from './componentes/Roles/Encargado/encargado-vista/encargado-vista.component';
import { SocorristaVistaComponent } from './componentes/Roles/Socorrista/socorrista-vista/socorrista-vista.component';
import { MapaComponent } from './componentes/mapa/mapa.component';


//Pruebas
import { PruebaComponent } from './componentes/prueba/prueba.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  //Roles
  { path: 'coordinadorGeneral', component: CoordinadorGenerealComponent },
  { path: 'coordinadorVista', component: CoordinadorVistaComponent },
  { path: 'encargadoVista', component: EncargadoVistaComponent },
  { path: 'socorristaVista', component: SocorristaVistaComponent },
  { path: 'prueba', component: PruebaComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'mapa', component: MapaComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
