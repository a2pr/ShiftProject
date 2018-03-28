import { Injectable } from '@angular/core';
import {Contract} from '../shared/contract';
import {CONTRACTS} from '../shared/data/contracts';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class ContractService {

  constructor() { }
  getContracts():Observable<Contract[]>{
    return Observable.of(CONTRACTS).delay(1000);
  }
}
