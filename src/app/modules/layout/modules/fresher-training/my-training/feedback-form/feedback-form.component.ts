import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FEEDBACK_fORM_DATA } from 'src/app/constants/text';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent implements OnInit {
  uiText = FEEDBACK_fORM_DATA;
  isVisible: any;
  isSelected: boolean = true;




  constructor(
    private dialogRef: MatDialogRef<FeedbackFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }


}
