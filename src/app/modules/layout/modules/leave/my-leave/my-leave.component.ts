import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MY_LEAVE_HEADING } from 'src/app/constants/tables';
import { MY_LEAVE_DATA } from 'src/app/constants/text';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss']
})
export class MyLeaveComponent implements OnInit {
  uiText = MY_LEAVE_DATA
  requestShow :boolean = false
  heading = MY_LEAVE_HEADING;
  table_data =[] ;
  dataSource = new MatTableDataSource<any>();
  myLeaveForm!:FormGroup
  shortLeaveTime:boolean = false
  constructor(
    private _formbuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.dataSource = new MatTableDataSource<any>(this.table_data);
    console.log(this.table_data.length,'wyifgi');
  }
  // showDiv(){
  //   this.requestShow = !this.requestShow;
  //   const element = document.querySelector('.mat-paginator-page-size');
  //   console.log(element, 'elemnet');
  //   element.classList.add('mat-paginator-size-page-expand');
  //   if (!this.requestShow) {
  //     element.classList.remove('mat-paginator-size-page-expand');
  //   }
  // }
  showDiv(data) {
    console.log(data);
  }
  createForm(){
    this.myLeaveForm = this._formbuilder.group({
      typeData:[],
      halfDay:[],
      halfTime:[],
      startDate:[],
      endDate:[],
      remarks:[],
      upload:[],
      editor:[],
    })
  }
  get myLeaveFormControl(){
    return this.myLeaveForm.controls;
  }
  submit(){
    console.log(this.myLeaveForm.value);
  }
  showShortTime(){
    if(this.myLeaveFormControl['typeData'].value != 'plannedleave' && this.myLeaveFormControl['typeData'].value != 'privilegedleave' && this.myLeaveFormControl['typeData'].value != 'emergencyleave'&& this.myLeaveFormControl['typeData'].value != 'allleave'){
      this.shortLeaveTime = false
    }else{
      this.shortLeaveTime = true
    }
  }
}
