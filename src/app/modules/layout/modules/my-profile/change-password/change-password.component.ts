import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { slideInRight } from 'src/animations/slideInRight';
import { validationMessage } from 'src/app/constants/error-messages';
import { ConfirmedValidator } from 'src/app/constants/passwordMatch';
import { BASIC_INFORMATION, FORM_LABEL } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  animations:[slideInRight]
})
export class ChangePasswordComponent implements OnInit {
uiMessage=BASIC_INFORMATION
labelMessage = FORM_LABEL
forgotForm!:FormGroup
errorMessage:any
  constructor(private _formbuilder:FormBuilder,
    private _formService: FormServiceService
    ) { }

  ngOnInit(): void {
    this.createForm();
    this.errorMessage=validationMessage
  }

  createForm(){
    this.forgotForm = this._formbuilder.group({
      oldPassword:this._formService.getControl('oldPassword'),
      newPassword:this._formService.getControl('newPassword'),
      confirmPassword:this._formService.getControl('confirmPassword')
    },{
      validator: ConfirmedValidator('newPassword', 'confirmPassword')
    }
    )
  }

}
