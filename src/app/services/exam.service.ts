import { Injectable } from '@angular/core';
import {Exam} from '../shared/exam';
import {ExamPrice} from '../shared/examPrice';
import {EXAMS} from '../shared/data/exams';
import {EXAMPRICES} from '../shared/data/examprices';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Contract } from '../shared/contract';

@Injectable()
export class ExamService {

  constructor() { }
  getExams():Observable<Exam[]>{
    return Observable.of(EXAMS).delay(1000);
  }
  getExamsPrice(exam:string, contract:string):Observable<ExamPrice>{
    return Observable.of(EXAMPRICES
      .filter((examPrice)=>(examPrice.exam.description==exam &&
        examPrice.contract.description==contract))[0])
  }

}
