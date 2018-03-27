import { Injectable } from '@angular/core';
import {Laboratory} from '../shared/laboratory';
import { Observable } from 'rxjs/Observable';
import {LABORATORYS} from '../shared/data/laboratorys';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class LaboratoryService {

  constructor() { }
  getLaboratorys():Observable<Laboratory[]>{
    return Observable.of(LABORATORYS).delay(1000);
  }
  getLaboratory(city:string):Observable<Laboratory[]>{
    return Observable.of(LABORATORYS
      .filter((laboratory)=>(laboratory.district.city.description===city)));
  }
}
