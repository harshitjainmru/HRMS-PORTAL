import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInternalTrainingRoutingModule } from './my-internal-training-routing.module';
import { MyInternalTrainingComponent } from './my-internal-training.component';
import { MatButtonModule } from '@angular/material/button';
import { RequestForTrainingComponent } from './request-for-training/request-for-training.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    MyInternalTrainingComponent,
    RequestForTrainingComponent
  ],
  imports: [
    CommonModule,
    MyInternalTrainingRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DropDownModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,


  ]
})
export class MyInternalTrainingModule { }
