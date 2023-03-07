import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsTrainingRoutingModule } from './details-training-routing.module';
import { DetailsTrainingComponent } from './details-training.component';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DetailsTrainingComponent
  ],
  imports: [
    CommonModule,
    DetailsTrainingRoutingModule,
    AbsoluteRoutingModule,
    MatButtonModule
  ]
})
export class DetailsTrainingModule { }
