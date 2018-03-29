import { Component, OnInit } from '@angular/core';
import {flyInOut} from '../animations/app.animation';
@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations: [
   
   flyInOut()
  ]
})
export class EndComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
