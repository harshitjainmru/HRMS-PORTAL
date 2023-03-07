import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LIMIT } from 'src/app/constants/limit';
import { PATTERN } from 'src/app/constants/pattern';
import { REFER_A_CANDIDATE_DIALOG } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-refer-acandidate',
  templateUrl: './refer-acandidate.component.html',
  styleUrls: ['./refer-acandidate.component.scss'],
})
export class ReferACandidateComponent implements OnInit {
  uiText = REFER_A_CANDIDATE_DIALOG;
  disableValue: boolean = true;
  referCandidateForm!: FormGroup;
  maxLength = 200;
  constructor(
    private dialogRef: MatDialogRef<ReferACandidateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private formService: FormServiceService
  ) {}

  ngOnInit(): void {
    console.log(this.data, 'bliiimp');
    this.createForm();
    this.setValue();
    this.setValueDisabled();
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }
  createForm() {
    this.referCandidateForm = this._formBuilder.group({
      department_name:['',[Validators.required]],
      job_code: ['',[Validators.required]],
      location: ['',[Validators.required]],
      experience: ['',[Validators.required]],
      job_location: ['',[Validators.required]],
      candidate_name: ['',[Validators.required]],
      position_title:['',[Validators.required]],
      experience_candidate: ['',[Validators.required]],
      email:['',[Validators.required,  Validators.pattern(PATTERN.EMAIL_PATTERN),
        Validators.email,
        Validators.maxLength(LIMIT.MAX_EMAIL_LENGTH),]],
      contact: ['',[Validators.required,Validators.pattern(PATTERN.PHONE_NUMBER)]],
      upload: ['',[Validators.required]],
      skill:['',[Validators.required,Validators.minLength(LIMIT.min_missing_textbox)]],
    });
  }
  setValue() {
    this.referCandidateForm
      .get('department_name')
      .setValue(this.data.DEPARTMENT_VALUE);
    this.referCandidateForm.get('job_code').setValue(this.data.JOB_CODE);
    this.referCandidateForm.get('location')?.setValue(this.data.LOCATION);
    this.referCandidateForm
      .get('experience')
      ?.setValue(this.data.EXPERIENCE_NUMBER);
  }
  setValueDisabled() {
    this.referCandidateForm.get('department_name').disable();
    this.referCandidateForm.get('job_code').disable();
    this.referCandidateForm.get('location').disable();
    this.referCandidateForm.get('experience').disable();
  }
}
