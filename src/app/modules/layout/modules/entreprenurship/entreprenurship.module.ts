import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntreprenurshipRoutingModule } from './entreprenurship-routing.module';
import { EntreprenurshipComponent } from './entreprenurship.component';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';


@NgModule({
  declarations: [
    EntreprenurshipComponent
  ],
  imports: [
    CommonModule,
    EntreprenurshipRoutingModule,
    AbsoluteRoutingModule
  ]
})
export class EntreprenurshipModule { }
