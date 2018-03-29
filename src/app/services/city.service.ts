//modules
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
//classes
import {City} from '../shared/city';
//Data
import {CITYS} from '../shared/data/citys';
@Injectable()
export class CityService {
//Service to get Data of City
  constructor() { }
  getCitys():Observable<City[]>{
    return Observable.of(CITYS).delay(1000);
  }
}
