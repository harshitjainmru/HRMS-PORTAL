import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { slideInRight } from 'src/animations/slideInRight';
import { QUALIFICATION_HEADING } from 'src/app/constants/tables';
import { BASIC_INFORMATION, EDUCATION_DROPDOWN, FORM_LABEL, LANGUAGE_DROPDOWN } from 'src/app/constants/text';
import { QUALIFICATIONTABLE } from 'src/app/models/table-interface';

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
  heading =  QUALIFICATION_HEADING
  Table_DATA:any

  pageSize=false;
  dataSource = new MatTableDataSource<QUALIFICATIONTABLE>();
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<QUALIFICATIONTABLE>(this.Table_DATA);

  }


}
