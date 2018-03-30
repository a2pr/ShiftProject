//modules
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
//classes
import {City} from '../shared/city';
import {Uf} from '../shared/uf'
import {District} from '../shared/district'

//Data
import {CITYS} from '../shared/data/citys';
import {UFS} from '../shared/data/ufs';
import {DISTRICTS} from '../shared/data/districts';
@Injectable()
export class CityService {
//Service to get Data of City
  constructor() { }
  getCitysByUf(Uf:string):Observable<City[]>{
    return Observable.of(CITYS
    .filter((city)=>(city.UF===Uf))).delay(1000);
  }
  getUfs():Observable<Uf[]>{
    return Observable.of(UFS).delay(1000);
  }
  getDistrictByCityAndUF(Uf:string, city:string):Observable<District[]>{
    return Observable.of(DISTRICTS
    .filter((district)=>((district.city.UF===Uf)))
  .filter((district)=>((district.city.description===city)))).delay(1000);
  }
}
