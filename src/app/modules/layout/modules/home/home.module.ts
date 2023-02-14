import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LatestJobOpeningComponent } from './latest-job-opening/latest-job-opening.component';
import { ReferralBonusComponent } from './referral-bonus/referral-bonus.component';
import { MatCardModule } from '@angular/material/card';
import { NewMemberComponent } from './new-member/new-member.component';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'src/app/modules/shared/carousel/carousel.module';
import { LatestAppinventivComponent } from './latest-appinventiv/latest-appinventiv.component';
import { AwardsComponent } from './latest-appinventiv/awards/awards.component';
import { BirthdayComponent } from './latest-appinventiv/birthday/birthday.component';
import { WorkAnniversaryComponent } from './latest-appinventiv/work-anniversary/work-anniversary.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AppreciationComponent } from './latest-appinventiv/appreciation/appreciation.component';


@NgModule({
  declarations: [
    HomeComponent,
    LatestJobOpeningComponent,
    ReferralBonusComponent,
    NewMemberComponent,
    LatestAppinventivComponent,
    AwardsComponent,
    BirthdayComponent,
    WorkAnniversaryComponent,
    GalleryComponent,
    AppreciationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    CarouselModule
  ]
})
export class HomeModule { }
