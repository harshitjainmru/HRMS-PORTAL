import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingRoutingModule } from './my-training-routing.module';
import { MyTrainingComponent } from './my-training.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MyTrainingComponent
  ],
  imports: [
    CommonModule,
    MyTrainingRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MyTrainingModule { }
