import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { validationMessage } from 'src/app/constants/error-messages';
import { FEEDBACK_fORM_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent implements OnInit {
  uiText = FEEDBACK_fORM_DATA;
  feedbackForm!: FormGroup;
  errorMessage;
  constructor(
    private dialogRef: MatDialogRef<FeedbackFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private formService: FormServiceService,
    private uitlity: UtilityServiceService
  ) {}

  ngOnInit(): void {
    this.errorMessage = validationMessage;
    this.createForm();
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }
  createForm() {
    this.feedbackForm = this._formBuilder.group({
      goalTraining: this.formService.getControl('goalTraining'),
      missingDescription: this.formService.getControl('missingDescription'),
      relevantFeedback: this.formService.getControl('relevantFeedback'),
      overallFeedback: this.formService.getControl('overallFeedback'),
      satisfiedWithContent: this.formService.getControl('satisfiedWithContent'),
      overallTrainingDescription: this.formService.getControl(
        'overallTrainingDescription'
      ),
    });
  }
  submit() {
    console.log(this.feedbackForm.value);

    if (this.feedbackForm.controls['goalTraining'].hasError('required')) {
      this.uitlity.showErrorToast('Objective/goal rating is required');
    } else if (
      this.feedbackForm.controls['relevantFeedback'].hasError('required')
    ) {
      this.uitlity.showErrorToast('Relevant rating is required');
    } else if (
      this.feedbackForm.controls['overallFeedback'].hasError('required')
    ) {
      this.uitlity.showErrorToast('Overall rating is required');
    } else if (
      this.feedbackForm.controls['satisfiedWithContent'].hasError('required')
    ) {
      this.uitlity.showErrorToast('Satisfied rating is required');
    } else if (
      this.feedbackForm.controls['overallTrainingDescription'].hasError(
        'required'
      )
    ) {
      this.uitlity.showErrorToast('Overall feeback field  is required');
    } else if (
      this.feedbackForm.controls['overallTrainingDescription'].hasError(
        'minlength'
      )
    ) {
      console.log('wgwg');
      {
        this.uitlity.showErrorToast(
          '"What is missing" textbox requires atleast 25 characters'
        );
      }
    }
    if (this.feedbackForm.controls['goalTraining'].value == 'no') {
      if (
        this.feedbackForm.controls['missingDescription'].hasError('required')
      ) {
        this.uitlity.showErrorToast('"What is missing" field is required');
      } else if (
        this.feedbackForm.controls['missingDescription'].hasError('minlength')
      ) {
        console.log('wgwg');
        {
          this.uitlity.showErrorToast(
            '"What is missing" textbox requires atleast 25 characters'
          );
        }
      }
    }
  }
}
