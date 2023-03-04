import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { FRESHER_TRAINING_DATA } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

@Component({
  selector: 'app-my-training',
  templateUrl: './my-training.component.html',
  styleUrls: ['./my-training.component.scss']
})
export class MyTrainingComponent implements OnInit {
  headerValue=FRESHER_TRAINING_DATA
  constructor(private title:Title, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.title.setTitle(TITLE.my_training_title)
  }
  openDialog(item):void{
    console.log(item,'feedback');
    const dialogRef = this.dialog.open(FeedbackFormComponent, {
      disableClose:true,
      data:item
    })
  }

}
