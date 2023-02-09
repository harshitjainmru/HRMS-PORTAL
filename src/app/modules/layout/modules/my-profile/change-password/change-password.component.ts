import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
