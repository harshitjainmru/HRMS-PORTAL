import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInternalTrainingRoutingModule } from './my-internal-training-routing.module';
import { MyInternalTrainingComponent } from './my-internal-training.component';


@NgModule({
  declarations: [
    MyInternalTrainingComponent
  ],
  imports: [
    CommonModule,
    MyInternalTrainingRoutingModule
  ]
})
export class MyInternalTrainingModule { }
