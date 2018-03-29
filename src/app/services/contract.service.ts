//Modules
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
//classes
import {Contract} from '../shared/contract';
//Data
import {CONTRACTS} from '../shared/data/contracts';
//

@Injectable()
export class ContractService {
//Service to get data from Contracts
  constructor() { }
  getContracts():Observable<Contract[]>{
    return Observable.of(CONTRACTS).delay(1000);
  }
}
