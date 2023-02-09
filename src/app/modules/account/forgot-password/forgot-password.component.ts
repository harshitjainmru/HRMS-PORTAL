import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { slideInOut } from 'src/animations/slideInOut';
import { validationMessage } from 'src/app/constants/error-messages';
import { ACCOUNT } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';
import { FormServiceService } from 'src/app/services/common/form-service.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations:[slideInOut]
})
export class ForgotPasswordComponent implements OnInit {
uiMessage=ACCOUNT
forgotForm!:FormGroup
errorMessage:any
  constructor(
    private _formBuilder:FormBuilder,
    private _formService:FormServiceService,
    private _title:Title

  ) {
    this._title.setTitle(TITLE.FORGOT_TITLE)
  }

  ngOnInit(): void {
    this.createForm();
    this.errorMessage = validationMessage;

  }
  createForm(){
    this.forgotForm = this._formBuilder.group({
      email: this._formService.getControl('email'),
    })
  }
  get formControl(){
    return this.forgotForm.controls
  }
  forgotHandler(){
    this.formControl['email'].patchValue(
      this.formControl['email'].value?.trim().toLowerCase()
    );
  }
}
