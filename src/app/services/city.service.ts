import { Injectable } from '@angular/core';
import {City} from '../shared/city';
import { Observable } from 'rxjs/Observable';
import {CITYS} from '../shared/data/citys';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
@Injectable()
export class CityService {

  constructor() { }
  getCitys():Observable<City[]>{
    return Observable.of(CITYS).delay(1000);
  }
}
