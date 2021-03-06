//modules
import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';
import { EventEmitter } from '@angular/core';
//classes
import {ServiceOrder} from '../shared/serviceOrder';
import {ServiceOrderExam} from '../shared/serviceOrderExam';
import {Patient} from '../shared/patient';
import {Medic} from '../shared/medic';
import {City} from '../shared/city';
import {Laboratory} from '../shared/laboratory';
import  * as jsPDF from 'jspdf';
import {ExamPrice} from '../shared/examPrice';
import { Exam } from '../shared/exam';
import { Contract } from '../shared/contract';
import { Uf } from '../shared/uf';
import { District } from '../shared/district';
//services
import { MedicService } from '../services/medic.service';
import {CityService} from  '../services/city.service';
import { LaboratoryService } from '../services/laboratory.service';
import { ExamService } from '../services/exam.service';
import { ContractService } from '../services/contract.service';
//animations
import {flyInOut, expand} from '../animations/app.animation';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  //Animation Functionality
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations: [
   flyInOut(), 
   expand()
  ]
  
})
export class RegistrationComponent implements OnInit {
  //VARIABLES
  serviceOrder:ServiceOrder;
  serviceOrderExam:ServiceOrderExam;
  orderServiceForm:FormGroup;
  patient:Patient;
  medics:Medic[];
  citys:City[];
  laboratorys:Laboratory[];
  exams:Exam[];
  examPrice:ExamPrice;
  insurances:Contract[];
  serviceOrderView=false;
  Ufs:Uf[];  
  districts:District[];

  constructor(private fb:FormBuilder,
    private router:Router,
    private medicService:MedicService,
    private cityService:CityService,
    private laboratoryService:LaboratoryService,
    private examService:ExamService,
    private contractService:ContractService ) {
    this.createForm();
   }

  ngOnInit() {
    //fetching data
   

    // this.laboratoryService.getLaboratorys()
    //   .subscribe(laboratorys=>this.laboratorys=laboratorys);

    this.examService.getExams()
      .subscribe(exams=>this.exams=exams);

    this.contractService.getContracts()
      .subscribe(contracts=>this.insurances=contracts);
  }
  //Mapping of form
  createForm(){
    this.orderServiceForm=this.fb.group({
      id:Math.floor((Math.random() * 100) + 1),
      date:new Date(),
      patient:['',Validators.required],
      birthday:['',Validators.required],
      gender:['',Validators.required],
      cityFromPatient:['', Validators.required],
      address:['',Validators.required],
      exam:['',Validators.required],
      insurance:['',Validators.required],
      lab:['',Validators.required],
      cityFromLab:['',Validators.required],
      medic:['',Validators.required],
      uf:['',Validators.required],
      district:['',Validators.required]
    });
  }
  onSelect(val){
    switch (val) {
      case "Uf":
      //gets UF by select
        this.cityService.getCitysByUf(this.orderServiceForm.get('uf').value)
          .subscribe(citys=>this.citys=citys);
        break;
      case "City":
      //gets District by selected City
      this.cityService.getDistrictByCityAndUF(this.orderServiceForm.get('uf').value,
      this.orderServiceForm.get('cityFromLab').value,
      )
        .subscribe(districts=>this.districts=districts);
      break;
      case "District":
      //gets Laboratory by selected District
      this.laboratoryService.getLaboratory(this.orderServiceForm.get('cityFromLab').value,
      this.orderServiceForm.get('district').value, this.orderServiceForm.get('uf').value)
        .subscribe(laboratorys=>this.laboratorys=laboratorys)
      break;
      case 'Lab':
      //gets Medics by selected Lab
      this.medicService.getMedic(this.orderServiceForm.get('lab').value)
      .subscribe(medics=>this.medics=medics)
      break;
    }
  }
  //shows Service Order section
  onPatientReady(){
    this.serviceOrderView=true;
  }
//gets selected exams price
  onSelectExam(val){
    this.examService.getExamsPrice(this.orderServiceForm.get('exam').value,
    this.orderServiceForm.get('insurance').value)
      .subscribe(examPrice=>{ this.examPrice=examPrice })
      this.cityService.getUfs()
      .subscribe(Ufs=>this.Ufs=Ufs);
  }
//Maps the provided information from the user, before submitting
setPatient(val){
  this.patient={
    name:this.orderServiceForm.get('patient').value,
    birthday:this.orderServiceForm.get('birthday').value.toLocaleDateString(),
    gender:this.orderServiceForm.get('gender').value,
    address:this.orderServiceForm.get('address').value,
    city:this.orderServiceForm.get('cityFromPatient').value
   
  };
  
  this.serviceOrder={
    id:this.orderServiceForm.get('id').value,
    date:this.orderServiceForm.get('date').value.toLocaleDateString(),
    patient:this.patient,
    contract:this.orderServiceForm.get('insurance').value,
    laboratory:this.orderServiceForm.get('lab').value,
    medic:this.orderServiceForm.get('medic').value
  }
}
//Gets information provided and prints a PDF receipt
getPdf(){
  console.log(document.getElementById('pdfmain'));
  var doc =new jsPDF();  
  doc.text("Patient Information -----------------------------"+this.serviceOrder.id+"\nPatient name:"+this.patient.name +"\nBirthday:"+
  this.patient.birthday+'\n'+"Gender: "+this.patient.gender+"\n"+"Date of registration: "+ this.serviceOrder.date+"\nCity: "
  +this.patient.city+"\nAddress:"+this.patient.address+"\n\n\nService Order Information: \nOrder ID: " +
  this.serviceOrder.id + "\nOrder Date registration: "+this.serviceOrder.date +"\nInsurance company: "+this.serviceOrder.contract
  +"\nLaboratory requested: "+this.serviceOrder.laboratory+"\nAssign medic: "+ this.serviceOrder.medic+
  "\n \n \n \n \n \n---------------------------------------------------------",
15,15)
doc.save('text.pdf');
 }
//Submit information
  onSubmit(){
    console.log(this.serviceOrder, 'nice');
    this.getPdf();
    this.router.navigateByUrl('/end');
  }

 
}
