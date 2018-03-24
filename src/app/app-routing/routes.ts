import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegistrationComponent } from '../registration/registration.component';
import { EndComponent } from '../end/end.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'registration',  component: RegistrationComponent },
    { path: 'end',  component: EndComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];