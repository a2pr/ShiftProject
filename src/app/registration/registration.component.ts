//modules
import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';
//classes
import {ServiceOrder} from '../shared/serviceOrder';
import {ServiceOrderExam} from '../shared/serviceOrderExam';
import {Pacient} from '../shared/pacient';
import {Medic} from '../shared/medic';
import {City} from '../shared/city';
import {Laboratory} from '../shared/laboratory';
import { EventEmitter } from '@angular/core';
import  * as jsPDF from 'jspdf';
var jquery:any; 
declare var $ :any;
import {ExamPrice} from '../shared/examPrice';
import { Exam } from '../shared/exam';
import { Contract } from '../shared/contract';

//services
import { MedicService } from '../services/medic.service';
import {CityService} from  '../services/city.service';
import { LaboratoryService } from '../services/laboratory.service';
import { ExamService } from '../services/exam.service';
import { ContractService } from '../services/contract.service';
import {visibility,flyInOut, expand} from '../animations/app.animation';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations: [
   visibility(),
   flyInOut(), 
   expand()
  ]
  
})
export class RegistrationComponent implements OnInit {
  //VARIABLES
  serviceOrder:ServiceOrder;
  serviceOrderExam:ServiceOrderExam;
  orderServiceForm:FormGroup;
  pacient:Pacient;
  medics:Medic[];
  citys:City[];
  laboratorys:Laboratory[];
  exams:Exam[];
  examPrice:ExamPrice;
  insurances:Contract[];
  visibilityServiceOrder='hidden';
  visibilityTable='hidden';

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
    this.cityService.getCitys()
      .subscribe(citys=>this.citys=citys);

    this.laboratoryService.getLaboratorys()
      .subscribe(laboratorys=>this.laboratorys=laboratorys);
    //gets exams
    this.examService.getExams()
      .subscribe(exams=>this.exams=exams);
    this.contractService.getContracts()
      .subscribe(contracts=>this.insurances=contracts);
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
  onPatientReady(){
    this.visibilityServiceOrder='shown';
  }
  onSelectCity(val){
  this.laboratoryService.getLaboratory(this.orderServiceForm.get('cityFromLab').value)
    .subscribe(laboratorys=>this.laboratorys=laboratorys)
  }
  
  onSelectLab(val){
  this.medicService.getMedic(this.orderServiceForm.get('lab').value)
    .subscribe(medics=>this.medics=medics)
  }
  onSelectExam(val){
    //not working corrextly
    this.visibilityTable='shown';
    this.examService.getExamsPrice(this.orderServiceForm.get('exam').value,
    this.orderServiceForm.get('insurance').value)
      .subscribe(examPrice=>{ this.examPrice=examPrice })
    
  }
setPatient(val){
  this.pacient={
    name:this.orderServiceForm.get('pacient').value,
    birthday:this.orderServiceForm.get('birthday').value.toLocaleDateString(),
    gender:this.orderServiceForm.get('gender').value,
    address:this.orderServiceForm.get('address').value,
    city:this.orderServiceForm.get('cityFromPacient').value
   
  };
  this.serviceOrder={
    id:this.orderServiceForm.get('id').value,
    date:this.orderServiceForm.get('date').value.toLocaleDateString(),
    pacient:this.pacient,
    contract:this.orderServiceForm.get('insurance').value,
    laboratory:this.orderServiceForm.get('lab').value,
    medic:this.orderServiceForm.get('medic').value
  }
  console.log(this.pacient);
}
  onSubmit(){
    console.log(this.serviceOrder, 'nice');
    this.getPdf();
    this.router.navigateByUrl('/end');
  }

  getPdf(){
    console.log(document.getElementById('pdfmain'));
    var doc =new jsPDF();  
    doc.text("Patient Information -----------------------------"+this.serviceOrder.id+"\nPatient name:"+this.pacient.name +"\nBirthday:"+
    this.pacient.birthday+'\n'+"Gender: "+this.pacient.gender+"\n"+"Date of registration: "+ this.serviceOrder.date+"\nCity: "
    +this.pacient.city+"\nAddress:"+this.pacient.address+"\n\n\nService Order Information: \nOrder ID: " +
    this.serviceOrder.id + "\nOrder Date registration: "+this.serviceOrder.date +"\nInsurance company: "+this.serviceOrder.contract
    +"\nLaboratory requested: "+this.serviceOrder.laboratory+"\n Assign medic: "+ this.serviceOrder.medic+"\n \n \n \n \n \n---------------------------------------------------------",
  15,15)
  doc.save('text.pdf');
   }
}
