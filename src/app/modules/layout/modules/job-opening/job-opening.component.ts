import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { JOB_OPENING, LATEST_JOB_OPENING } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';
import { ReferACandidateComponent } from '../home/latest-job-opening/dialogReferACandidate/refer-acandidate/refer-acandidate.component';

@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.scss']
})
export class JobOpeningComponent implements OnInit {
  uiMessage = JOB_OPENING;
  cardLogo = LATEST_JOB_OPENING;
  title = TITLE.JOB_OPENING_TITLE
  constructor(private _title: Title,private dialog:MatDialog) { }

  ngOnInit(): void {
    this._title.setTitle(this.title);
  }
  openDialog(item):void{
    console.log(item,'iuten');

    const dialogRef = this.dialog.open(ReferACandidateComponent, {
      disableClose:true,
      data:item
    })
  }

}
