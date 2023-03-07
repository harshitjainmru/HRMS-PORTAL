import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UPCOMING_TRAINING_DATA } from 'src/app/constants/text';
import { RequestForTrainingComponent } from './request-for-training/request-for-training.component';

@Component({
  selector: 'app-my-internal-training',
  templateUrl: './my-internal-training.component.html',
  styleUrls: ['./my-internal-training.component.scss']
})
export class MyInternalTrainingComponent implements OnInit {
  headerValue = UPCOMING_TRAINING_DATA

  constructor(private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openJobDetailsInNewWindow(item) {
    console.log(item,'item');
    // const url = this.router.serializeUrl(
    //   this.router.createUrlTree([`/admin/training_details_trainee/${item.id}`])
    // );
    // window.open(url, '_blank');
  }
  openDialog():void{

    const dialogRef = this.dialog.open(RequestForTrainingComponent, {
      disableClose:true,
    })
  }

}
