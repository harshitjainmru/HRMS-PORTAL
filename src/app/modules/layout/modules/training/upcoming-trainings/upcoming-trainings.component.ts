import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UPCOMING_TRAINING_DATA } from 'src/app/constants/text';
import { CancelEnrollmentComponent } from './cancel-enrollment/cancel-enrollment.component';

@Component({
  selector: 'app-upcoming-trainings',
  templateUrl: './upcoming-trainings.component.html',
  styleUrls: ['./upcoming-trainings.component.scss']
})
export class UpcomingTrainingsComponent implements OnInit {
headerValue = UPCOMING_TRAINING_DATA
  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openDialog():void{
    const dialogRef = this.dialog.open(CancelEnrollmentComponent, {
      // disableClose:true,
    })
  }

}
