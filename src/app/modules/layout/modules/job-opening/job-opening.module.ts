import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpeningRoutingModule } from './job-opening-routing.module';
import { JobOpeningComponent } from './job-opening.component';


@NgModule({
  declarations: [
    JobOpeningComponent
  ],
  imports: [
    CommonModule,
    JobOpeningRoutingModule
  ]
})
export class JobOpeningModule { }
