import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { REQUEST_TRAINING_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-request-for-training',
  templateUrl: './request-for-training.component.html',
  styleUrls: ['./request-for-training.component.scss'],
})
export class RequestForTrainingComponent implements OnInit {
  uiText = REQUEST_TRAINING_DATA;
  requestedForm!: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<RequestForTrainingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private _formServcie:FormServiceService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }
  createForm() {
    this.requestedForm = this._formBuilder.group({
      training_name:this._formServcie.getControl('training_name'),
      team_name:this._formServcie.getControl('team_name'),
      skill_enhancement:this._formServcie.getControl('skill_enhancement'),
      skill_needed:this._formServcie.getControl('skill_needed'),
      interested:this._formServcie.getControl('interested'),
      timeline:this._formServcie.getControl('timeline')
    });
  }
  get requestedFormControl(){
    return this.requestedForm.controls
  }
  submit() {
  }
}
