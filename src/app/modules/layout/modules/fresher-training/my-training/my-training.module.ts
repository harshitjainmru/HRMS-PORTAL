import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingRoutingModule } from './my-training-routing.module';
import { MyTrainingComponent } from './my-training.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    MyTrainingComponent,
    FeedbackFormComponent
  ],
  imports: [
    CommonModule,
    MyTrainingRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ]
})
export class MyTrainingModule { }
