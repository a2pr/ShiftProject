import { Component, OnInit, Input } from '@angular/core';
import {Pacient} from '../shared/pacient';
import {ServiceOrder} from '../shared/serviceOrder';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
@Input('pacient')patient:Pacient;
@Input('serviceOrder')serviceOrder:ServiceOrder;
  constructor() { }

  ngOnInit() {
  }

}
