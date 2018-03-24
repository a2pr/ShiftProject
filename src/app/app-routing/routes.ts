import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegistrationComponent } from '../registration/registration.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'registration',  component: RegistrationComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];