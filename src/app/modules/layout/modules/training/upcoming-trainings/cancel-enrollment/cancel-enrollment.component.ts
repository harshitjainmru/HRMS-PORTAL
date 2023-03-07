import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { validationMessage } from 'src/app/constants/error-messages';
import { CANCEL_ENROLLMENT_DIALOG_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';

@Component({
  selector: 'app-cancel-enrollment',
  templateUrl: './cancel-enrollment.component.html',
  styleUrls: ['./cancel-enrollment.component.scss'],
})
export class CancelEnrollmentComponent implements OnInit {
  cancelEnrollmentForm!: FormGroup;
  maxLength = 500;
  uiText = CANCEL_ENROLLMENT_DIALOG_DATA;
  errorMessage;
  constructor(
    private dialogRef: MatDialogRef<CancelEnrollmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private _formService: FormServiceService,
    private _utilityService:UtilityServiceService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.errorMessage = validationMessage;
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }
  createForm() {
    this.cancelEnrollmentForm = this._formBuilder.group({
      briefReason: this._formService.getControl('briefReason'),
    });
  }
  submit(){
    if(this.cancelEnrollmentForm.controls['briefReason'].hasError('required')){
      this._utilityService.showErrorToast('Brief Reason field is required')
    }else if(this.cancelEnrollmentForm.controls['briefReason'].hasError('minlength')){
      this._utilityService.showErrorToast('Reason requires atleast 25 characters')
    }
  }
}
