//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';


import { EndComponent } from './end/end.component';

//Services
import { MedicService } from './services/medic.service';
import { CityService } from './services/city.service';
import { LaboratoryService } from './services/laboratory.service';
import { ExamService } from './services/exam.service';
import { ContractService } from './services/contract.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MedicService,
    CityService,
    LaboratoryService,
    ExamService,
    ContractService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
