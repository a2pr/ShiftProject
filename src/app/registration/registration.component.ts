//modules
import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
//classes
import {ServiceOrder} from '../shared/serviceOrder';
import {ServiceOrderExam} from '../shared/serviceOrderExam';
import {Pacient} from '../shared/pacient';
import {Medic} from '../shared/medic';
import {City} from '../shared/city';
import {Laboratory} from '../shared/laboratory';
import { EventEmitter } from '@angular/core';
var jquery:any; 
declare var $ :any;
//services
import { MedicService } from '../services/medic.service';
import {CityService} from  '../services/city.service';
import { LaboratoryService } from '../services/laboratory.service';
import  * as jsPDF from 'jspdf';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  serviceOrder:ServiceOrder;
  serviceOrderExam:ServiceOrderExam;
  orderServiceForm:FormGroup;
  pacient:Pacient;
  medics:Medic[];
  citys:City[];
  laboratorys:Laboratory[];

  constructor(private fb:FormBuilder,
    private router:Router,
    private medicService:MedicService,
    private cityService:CityService,
    private laboratoryService:LaboratoryService ) {
    this.createForm();
   }

  ngOnInit() {
    this.cityService.getCitys().subscribe(citys=>this.citys=citys);
    this.laboratoryService.getLaboratorys()
      .subscribe(laboratorys=>this.laboratorys=laboratorys);
  }
  createForm(){
    this.orderServiceForm=this.fb.group({
      id:Math.floor((Math.random() * 100) + 1),
      date:new Date(),
      pacient:['',Validators.required],
      birthday:['',Validators.required],
      gender:['',Validators.required],
      cityFromPacient:['', Validators.required],
      address:['',Validators.required],
      exam:['',Validators.required],
      insurance:['',Validators.required],
      lab:['',Validators.required],
      cityFromLab:['',Validators.required],
      medic:['',Validators.required]
    });
  }
  onSelectCity(val){
  this.laboratoryService.getLaboratory(this.orderServiceForm.get('cityFromLab').value)
    .subscribe(laboratorys=>this.laboratorys=laboratorys)
  }
  
  onSelectLab(val){
  this.medicService.getMedic(this.orderServiceForm.get('lab').value)
    .subscribe(medics=>this.medics=medics)
  }

  onSubmit(){
    this.pacient={
      name:this.orderServiceForm.get('pacient').value,
      birthday:this.orderServiceForm.get('birthday').value,
      gender:this.orderServiceForm.get('gender').value,
      address:this.orderServiceForm.get('address').value,
      city:this.orderServiceForm.get('cityFromPacient').value
    };
    this.serviceOrder={
      id:this.orderServiceForm.get('id').value,
      date:this.orderServiceForm.get('date').value,
      pacient:this.pacient,
      contract:this.orderServiceForm.get('insurance').value,
      laboratory:this.orderServiceForm.get('lab').value,
      medic:this.orderServiceForm.get('medic').value
    }
    console.log(this.serviceOrder, 'nice');
   this.getPdf();
    this.router.navigateByUrl('/end');
  }

  getPdf(){
    var doc =new jsPDF()
    var source=$('body')[0];
    var title1= $('<h1><h1>').text('Protocol for '+ this.serviceOrder.laboratory)
      .addClass('title1').appendTo(source);
    var styles=$("<style>")
                .prop("type", "text/css")
                  .html("\
                  .customers {\
                    font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;\
                    border-collapse: collapse;\
                    width: 95%;\
                    margin: auto;\
                    margin-top:20px; \
                    margin-bottom: 20px;\
                }\
                \
                .customers td, #customers th {\
                    border: 1px solid #ddd;\
                    padding: 8px;\
                }\
                .customers tr:nth-child(even){background-color: #f2f2f2;}\
                \
                .customers tr:hover {background-color: #ddd;}\
                \
                .customers th {\
                    padding-top: 12px;\
                    padding-bottom: 12px;\
                    text-align: left;\
                    background-color: #4CAF50;\
                    color: white;\
                    }\
                    .title1{\
                        float: left;\
                    }\
                    .title2{\
                        float: right;\
                    }\
                    body{\
                        padding:10px;\
                    }")
                  .appendTo(source);
    var table=$('<table></table>').appendTo(source);
    
    doc.fromHTML(source,5,5);
    doc.save('test.pdf');
  }
}
