//Modules
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
//classes
import {Laboratory} from '../shared/laboratory';
//Data
import {LABORATORYS} from '../shared/data/laboratorys';

@Injectable()
export class LaboratoryService {
//service to get data saved from the Laboratorys.

  constructor() { }
  //All laboratorys
  getLaboratorys():Observable<Laboratory[]>{
    return Observable.of(LABORATORYS).delay(1000);
  }
  //Laboratorys inside the city provided.
  getLaboratory(city:string):Observable<Laboratory[]>{
    return Observable.of(LABORATORYS
      .filter((laboratory)=>(laboratory.district.city.description===city)));
  }
}
