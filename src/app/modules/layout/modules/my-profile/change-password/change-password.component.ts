import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { slideInRight } from 'src/animations/slideInRight';
import { BASIC_INFORMATION, FORM_LABEL } from 'src/app/constants/text';

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
  constructor(private _formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.forgotForm = this._formbuilder.group({
      oldPassword:[],
      newPassword:[],
      confirmPassword:[]
    })
  }

}
