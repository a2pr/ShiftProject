import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule,MatButtonModule,
        MatFormFieldModule,MatDividerModule,
        MatDatepickerModule, MatNativeDateModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
   exports:[
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: []
})
export class MaterialModule { }
