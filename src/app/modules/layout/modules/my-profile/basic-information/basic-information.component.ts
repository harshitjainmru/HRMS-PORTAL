import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { slideInRight } from 'src/animations/slideInRight';
import { validationMessage } from 'src/app/constants/error-messages';
import { BASIC_INFORMATION, FORM_LABEL, GENDER_INPUT_DROPDOWN, MARITAL_DROPDOWN } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
  animations:[slideInRight]
})
export class BasicInformationComponent implements OnInit {
uiMessage=BASIC_INFORMATION
labelMessage=FORM_LABEL
genderValue=GENDER_INPUT_DROPDOWN
maritalStatusValue=MARITAL_DROPDOWN
minDate:Date
maxDate:Date
basicForm!:FormGroup
errorMessage:any
  constructor(
    private _formbuilder:FormBuilder,
    private _formService:FormServiceService,

  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 60, 0, 1);
    this.maxDate = new Date(currentYear - 20, 11, 31);
  }

  ngOnInit(): void {
    this.createForm();
    this.errorMessage = validationMessage
  }
  createForm(){
    this.basicForm = this._formbuilder.group({
      firstName:this._formService.getControl('firstName'),
      lastName:this._formService.getControl('lastName'),
      dob:this._formService.getControl('dob'),
      gender: this._formService.getControl('gender',true,this.genderValue[0]),
      maritalStatus:this._formService.getControl('maritalStatus',true, this.maritalStatusValue[0]),
      contact:this._formService.getControl('contact'),
      total_year:this._formService.getControl('total_year'),
      total_month:this._formService.getControl('total_month'),
      relevant_year:this._formService.getControl('relevant_year'),
      relevant_month:this._formService.getControl('relevant_month'),
      address:this._formService.getControl('address')
    })
  }
  get basicFormControl() {
    return this.basicForm.controls;
  }

  submitHandler(){
    console.log(this.basicForm.value);

    this.basicFormControl['firstName'].patchValue(
      this.basicFormControl['firstName'].value?.trim().toLowerCase()
    );
    this.basicFormControl['lastName'].patchValue(
      this.basicFormControl['lastName'].value?.trim().toLowerCase()
    );
    if(this.basicForm.valid){
      console.log(this.basicForm,'this. basicform');

    }
  }


}
