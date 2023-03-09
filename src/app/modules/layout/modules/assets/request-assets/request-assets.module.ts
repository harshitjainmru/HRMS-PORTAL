import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestAssetsRoutingModule } from './request-assets-routing.module';
import { RequestAssetsComponent } from './request-assets.component';


@NgModule({
  declarations: [
    RequestAssetsComponent
  ],
  imports: [
    CommonModule,
    RequestAssetsRoutingModule
  ]
})
export class RequestAssetsModule { }
