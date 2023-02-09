import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LatestJobOpeningComponent } from './latest-job-opening/latest-job-opening.component';
import { ReferralBonusComponent } from './referral-bonus/referral-bonus.component';
import { MatCardModule } from '@angular/material/card';
import { NewMemberComponent } from './new-member/new-member.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent,
    LatestJobOpeningComponent,
    ReferralBonusComponent,
    NewMemberComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HomeModule { }
