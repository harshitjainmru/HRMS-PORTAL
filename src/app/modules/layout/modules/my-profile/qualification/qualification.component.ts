import { Component, OnInit } from '@angular/core';
import { slideInRight } from 'src/animations/slideInRight';
import { BASIC_INFORMATION, EDUCATION_DROPDOWN, FORM_LABEL, LANGUAGE_DROPDOWN } from 'src/app/constants/text';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
  animations:[slideInRight]
})
export class QualificationComponent implements OnInit {
  uiMessage=BASIC_INFORMATION
  labelMessage=FORM_LABEL
  educationDropdown = EDUCATION_DROPDOWN
  languageDropdown = LANGUAGE_DROPDOWN
  constructor() { }

  ngOnInit(): void {
  }

}
