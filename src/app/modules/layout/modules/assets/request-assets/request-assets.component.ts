import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { validationMessage } from 'src/app/constants/error-messages';
import { ASSET_REQUEST_HEADING } from 'src/app/constants/tables';
import { REQUEST_ASSETS_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-request-assets',
  templateUrl: './request-assets.component.html',
  styleUrls: ['./request-assets.component.scss'],
})
export class RequestAssetsComponent implements OnInit {
  yesterday = new Date();
  uiText = REQUEST_ASSETS_DATA;
  heading = ASSET_REQUEST_HEADING;
  table_data = [];
  dataSource = new MatTableDataSource<any>();
  requestShow: boolean = false;
  assetRequestForm!: FormGroup;
  errorMessage;
  constructor(
    private _formBuilder: FormBuilder,
    private _formService: FormServiceService
  ) {
    this.yesterday.setDate(this.yesterday.getDate() - 0);
  }

  ngOnInit(): void {
    this.createForm();
    this.dataSource = new MatTableDataSource<any>(this.table_data);
    this.errorMessage = validationMessage;
  }
  showForm() {
    this.requestShow = !this.requestShow;
    const element = document.querySelector('.mat-paginator-page-size');
    console.log(element, 'elemnet');
    element.classList.add('mat-paginator-size-page-expand');
    if (!this.requestShow) {
      element.classList.remove('mat-paginator-size-page-expand');
    }
  }
  createForm() {
    this.assetRequestForm = this._formBuilder.group({
      category: this._formService.getControl('category'),
      quantity: this._formService.getControl('quantity'),
      priority: this._formService.getControl('priority'),
      date: this._formService.getControl('date'),
      type: this._formService.getControl('type'),
      reason: this._formService.getControl('reason'),
    });
  }
  get assetRequestFormControl() {
    return this.assetRequestForm.controls;
  }
  submit(){

  }
}
