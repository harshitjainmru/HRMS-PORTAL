import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { slideInRight } from 'src/animations/slideInRight';
import { BASIC_INFORMATION, FORM_LABEL, GENDER_INPUT_DROPDOWN, MARITAL_DROPDOWN } from 'src/app/constants/text';

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
  constructor(
    private _formbuilder:FormBuilder
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 60, 0, 1);
    this.maxDate = new Date(currentYear - 20, 11, 31);
  }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.basicForm = this._formbuilder.group({
      firstName:[],
      lastName:[],
      dob:[],
      gender:[],
      maritalStatus:[],
      contact:[],
      total_year:[],
      total_month:[],
      relevant_year:[],
      relevant_month:[],
      address:[]
    })
  }


}
