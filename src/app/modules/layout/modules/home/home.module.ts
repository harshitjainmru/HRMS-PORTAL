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
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryDialogComponent } from './gallery/gallery-dialog/gallery-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
// import { ReferACandidateComponent } from './latest-job-opening/dialogReferACandidate/refer-acandidate/refer-acandidate.component';


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
    AppreciationComponent,
    GalleryDialogComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    CarouselModule,
    AbsoluteRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,


  ]
})
export class HomeModule { }
