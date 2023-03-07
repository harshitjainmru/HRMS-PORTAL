import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingTrainingsRoutingModule } from './upcoming-trainings-routing.module';
import { UpcomingTrainingsComponent } from './upcoming-trainings.component';
import { MatButtonModule } from '@angular/material/button';
import { CancelEnrollmentComponent } from './cancel-enrollment/cancel-enrollment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpcomingTrainingsComponent,
    CancelEnrollmentComponent
  ],
  imports: [
    CommonModule,
    UpcomingTrainingsRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UpcomingTrainingsModule { }
