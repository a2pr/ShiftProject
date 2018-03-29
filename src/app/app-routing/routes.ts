import { Routes } from '@angular/router';
//Components
import { HomeComponent } from '../home/home.component';
import { RegistrationComponent } from '../registration/registration.component';
import { EndComponent } from '../end/end.component';
//export all path used in the app
export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'registration',  component: RegistrationComponent },
    { path: 'end',  component: EndComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];