import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { LIMIT } from 'src/app/constants/limit';
import { PATTERN } from 'src/app/constants/pattern';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  constructor() {}

  VALIDATION = {
    email: [
      Validators.pattern(PATTERN.EMAIL_PATTERN),
      Validators.email,
      Validators.maxLength(LIMIT.MAX_EMAIL_LENGTH),
    ],
    password: [Validators.pattern(PATTERN.PASSWORD_PATTERN)],
    firstName:[Validators.pattern(PATTERN.FIRST_NAME)],
    lastName:[Validators.pattern(PATTERN.LAST_NAME)],
    dob:[],
    gender:[],
    maritalStatus:[],
    contact:[Validators.pattern(PATTERN.PHONE_NUMBER)],
    total_year:[],
    total_month:[],
    relevant_year:[],
    relevant_month:[],
    address:[],
    oldPassword:[Validators.pattern(PATTERN.PASSWORD_PATTERN)],
    newPassword:[Validators.pattern(PATTERN.PASSWORD_PATTERN)],
    confirmPassword:[Validators.pattern(PATTERN.PASSWORD_PATTERN)],
    school: [],
    educationLevel: [],
    fromTime: [],
    toTime: [],
    language: [],
    professionalCourses: [],
    description: [],
    employeename:[],
    departmentname:[],
    name:[],
    emp_id:[],
    pitch_title:[],
    industry:[],
    pitch_type:[],
    editor:[],
    presentation:[],
    title:[],
    goalTraining:[],
    missingDescription:[Validators.minLength(LIMIT.max_missing_textbox)],
    relevantFeedback:[],
    overallFeedback:[],
    satisfiedWithContent:[],
    overallTrainingDescription:[Validators.minLength(LIMIT.max_missing_textbox)],
    briefReason:[Validators.minLength(LIMIT.min_missing_textbox)],
    training_name:[],
    team_name:[],
    skill_enhancement:[Validators.minLength(LIMIT.min_missing_textbox)],
    skill_needed:[Validators.minLength(LIMIT.min_missing_textbox)],
    interested:[],
    timeline:[],
    category:[],
    quantity:[],
    priority:[],
    date:[],
    type:[],
    reason:[],
    id:[],
    code:[],
    serialnumber:[],
    modelnumber:[],
    os:[],
    osversion:[],
    brand:[],
    color:[],
    workingcondition:[],
    assetimage:[],
    employee:[],
    company:[]
  };

  getControl(name: string, required = true ,drop:any = '') {
    //@ts-ignore: unreachable code error

    let compose = [...this.VALIDATION[name]];
    if (required) {
      if (name === 'checkbox') {
        compose.splice(0, 0, Validators.requiredTrue);
      } else {
        compose.splice(0, 0, Validators.required);
      }
    }
    if(drop){
      return [drop,compose]
    }else{
      return [null, compose];
    }
  }
}
