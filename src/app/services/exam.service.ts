import { Injectable } from '@angular/core';
//class
import {Exam} from '../shared/exam';
import {ExamPrice} from '../shared/examPrice';
//Data
import {EXAMS} from '../shared/data/exams';
import {EXAMPRICES} from '../shared/data/examprices';
//Modules
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Injectable()
export class ExamService {
  //Service to get data for de exams.
  constructor() { }
  //All exams
  getExams():Observable<Exam[]>{
    return Observable.of(EXAMS).delay(1000);
  }
  //Exams with the same name and cover by contract provided.
  getExamsPrice(exam:string, contract:string):Observable<ExamPrice>{
    return Observable.of(EXAMPRICES
      .filter((examPrice)=>(examPrice.exam.description==exam &&
        examPrice.contract.description==contract))[0]).delay(1000);
  }

}
