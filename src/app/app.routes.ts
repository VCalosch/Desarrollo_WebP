import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/compartidos/navbar/navbar.component';
import { FooterComponent } from './componentes/compartidos/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';


//Roles
import { CoordinadorGenerealComponent } from './componentes/roles/coordinador/coordinador-genereal/coordinador-genereal.component';
import { CoordinadorVistaComponent } from './componentes/Roles/Coordinador/coordinador-vista/coordinador-vista.component';
import { EncargadoVistaComponent } from './componentes/Roles/Encargado/encargado-vista/encargado-vista.component';
import { SocorristaVistaComponent } from './componentes/Roles/Socorrista/socorrista-vista/socorrista-vista.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  //Roles
  { path: 'coordinadorGenereal', component: CoordinadorGenerealComponent },
  { path: 'coordinadorVista', component: CoordinadorVistaComponent },
  { path: 'encargadoVista', component: EncargadoVistaComponent },
  { path: 'socorristaVista', component: SocorristaVistaComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
