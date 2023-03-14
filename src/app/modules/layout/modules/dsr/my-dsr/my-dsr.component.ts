import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DSR_DATA } from 'src/app/constants/text';

@Component({
  selector: 'app-my-dsr',
  templateUrl: './my-dsr.component.html',
  styleUrls: ['./my-dsr.component.scss'],
})
export class MyDsrComponent implements OnInit {
  uiText = DSR_DATA;
  dsrForm!: FormGroup;
  dataSource = new MatTableDataSource<any>();
  maxDate = new Date();
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.uiText.table_data);
    this.createForm();
  }
  createForm() {
    this.dsrForm = this._formBuilder.group({
      project: [''],
      date: '',
      hour: '',
      nowork: '',
      editor: '',
    });
  }
  get dsrFormControl(){
    return this.dsrForm.controls;
  }
  showDiv(data) {
    console.log(data);
  }
  submitHandler(){

  }
}
