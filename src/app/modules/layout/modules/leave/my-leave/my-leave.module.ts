import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLeaveRoutingModule } from './my-leave-routing.module';
import { MyLeaveComponent } from './my-leave.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MyLeaveComponent
  ],
  imports: [
    CommonModule,
    MyLeaveRoutingModule,
    SharedModule,
    MatIconModule

  ]
})
export class MyLeaveModule { }
