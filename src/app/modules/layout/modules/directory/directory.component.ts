import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DIRECTORY_DROPDOWN_VALUE, DIRECTORY_EMPLOYEE_DATA, DIRECTORY_VALUE } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
headerValue=DIRECTORY_VALUE
empData=DIRECTORY_EMPLOYEE_DATA
dropDownData=DIRECTORY_DROPDOWN_VALUE
directoryFilterformGroup!:FormGroup
  constructor(private _formBuilder:FormBuilder,private _formService:FormServiceService,private title:Title) { }

  ngOnInit(): void {
    this.createForm();
    this.title.setTitle(TITLE.directory_title)
  }
  createForm(){
    this.directoryFilterformGroup = this._formBuilder.group({
      employeename:this._formService.getControl('employeename'),
      departmentname:this._formService.getControl('departmentname',true, this.dropDownData[0]),

    })
  }
  get directoryFilterformGroupControl(){
    return this.directoryFilterformGroup.controls
  }

}
