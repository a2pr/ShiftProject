//Modules
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
//classes
import {Medic} from '../shared/medic';
import {Laboratory} from '../shared/laboratory';
//Data
import {MEDICS} from '../shared/data/medics';

@Injectable()
export class MedicService {
//service to get data saved from the medics
  constructor() { }
  getMedic(laboratory:string):Observable<Medic[]>{
    return Observable.of(MEDICS
    .filter((medic)=>(medic.laboratory.description==laboratory)));
  }
 
}
