//modules
import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
//classes
import {ServiceOrder} from '../shared/serviceOrder';
import {ServiceOrderExam} from '../shared/serviceOrderExam';
import {Pacient} from '../shared/pacient';

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
  constructor(private fb:FormBuilder,
    private router:Router) {
    this.createForm();
   }

  ngOnInit() {
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
    this.router.navigateByUrl('/end');
  }
}
