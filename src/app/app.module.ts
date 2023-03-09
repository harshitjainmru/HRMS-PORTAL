import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { AbsoluteRoutingModule } from './pipes/absolute-routing/absolute-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from './modules/shared/shared.module';
import { RewardCondtionDialogComponent } from './components/reward-condtion-dialog/reward-condtion-dialog.component';
import { PaginatorStyleDirectivesDirective } from './directives/paginator-style-directives.directive';




@NgModule({
  declarations: [AppComponent, RewardCondtionDialogComponent, PaginatorStyleDirectivesDirective,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    AbsoluteRoutingModule,
    MatSnackBarModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
