import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { slideInRight } from 'src/animations/slideInRight';
import { validationMessage } from 'src/app/constants/error-messages';
import { QUALIFICATION_DATA, QUALIFICATION_HEADING } from 'src/app/constants/tables';
import {
  BASIC_INFORMATION,
  EDUCATION_DROPDOWN,
  FORM_LABEL,
  LANGUAGE_DROPDOWN,
} from 'src/app/constants/text';
import { QUALIFICATIONTABLE } from 'src/app/models/table-interface';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
  animations: [slideInRight],
})
export class QualificationComponent implements OnInit {
  uiMessage = BASIC_INFORMATION;
  labelMessage = FORM_LABEL;
  educationDropdown = EDUCATION_DROPDOWN;
  languageDropdown = LANGUAGE_DROPDOWN;
  heading = QUALIFICATION_HEADING;
  qualificationForm!: FormGroup;
  Table_DATA=QUALIFICATION_DATA;
  myControl = new FormControl('');
  dropDownField = 'width:369px';
  pageSize = false;
  dataSource = new MatTableDataSource<QUALIFICATIONTABLE>();
  @ViewChild(MatPaginator, { static: false }) matPaginator!: MatPaginator;

  errorMessage:any;
  constructor(
    private _formBuilder: FormBuilder,
    private _formService: FormServiceService
  ) {}
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<QUALIFICATIONTABLE>(
      this.Table_DATA
    )
    this.errorMessage = validationMessage
    this.createForm();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        let res = this._filter(value || '');
        if (!res.length) {
          res = ['no results Found'];
        }
        console.log(res);
        return res;
      })
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.educationDropdown.filter((option) => {
      const res = option.toLowerCase().includes(filterValue);

      return res;
    });
  }
  get qualificationFormControl(){
    return this.qualificationForm.controls;
  }

  createForm() {
    this.qualificationForm = this._formBuilder.group({
      school: this._formService.getControl('school'),
      educationLevel: this._formService.getControl('educationLevel',true,this.educationDropdown[0]),
      fromTime: this._formService.getControl('fromTime'),
      toTime: this._formService.getControl('toTime'),
      language: this._formService.getControl('language',true,this.languageDropdown[0]),
      professionalCourses: this._formService.getControl('professionalCourses'),
      description: this._formService.getControl('description'),
    });
  }
  submitHandler(){
    // debugger
    this.Table_DATA.push({action:'bye',
    school:'y',
    fromTimetotoTime:'hii',
    educationLevel:'hii'
    })
    this.dataSource = new MatTableDataSource<QUALIFICATIONTABLE>(
      this.Table_DATA
    )
    this.dataSource.paginator = this.matPaginator;

    if(this.qualificationForm.valid){
      console.log(this.qualificationForm);
    }
  }
}
