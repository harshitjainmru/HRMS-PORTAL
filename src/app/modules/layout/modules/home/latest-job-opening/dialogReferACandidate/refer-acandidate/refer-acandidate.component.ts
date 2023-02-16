import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { REFER_A_CANDIDATE_DIALOG } from 'src/app/constants/text';

@Component({
  selector: 'app-refer-acandidate',
  templateUrl: './refer-acandidate.component.html',
  styleUrls: ['./refer-acandidate.component.scss']
})
export class ReferACandidateComponent implements OnInit {
uiText=REFER_A_CANDIDATE_DIALOG
disableValue:boolean=true
referCandidateForm!:FormGroup
  constructor(
    private dialogRef: MatDialogRef<ReferACandidateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.data,"bliiimp");
    this.createForm();
    this.referCandidateForm.get('department_name').setValue(this.data.DEPARTMENT_VALUE)
    this.referCandidateForm.get('job_code').setValue(this.data.JOB_CODE)
    this.referCandidateForm.get('location')?.setValue(this.data.LOCATION)
    this.referCandidateForm.get('experience')?.setValue(this.data.EXPERIENCE_NUMBER)


  }
  crossClick() {
    this.dialogRef.close('cancel');
  }
  createForm(){
this.referCandidateForm = this._formBuilder.group({
  department_name:[''],
  job_code:[''],
  location:[''],
  experience:[''],
})
  }
}
