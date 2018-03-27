import { Injectable } from '@angular/core';
import {MEDICS} from '../shared/data/medics';
import {Medic} from '../shared/medic';
import { Observable } from 'rxjs/Observable';
import {Laboratory} from '../shared/laboratory';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
@Injectable()
export class MedicService {

  constructor() { }
  getMedics():Observable<Medic[]>{
    return Observable.of(MEDICS).delay(1000);
  }
 
}
