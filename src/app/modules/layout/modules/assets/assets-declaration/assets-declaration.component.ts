import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { validationMessage } from 'src/app/constants/error-messages';
import { ASSET_DECLARATION_HEADING } from 'src/app/constants/tables';
import { DECLARATION_ASSETS_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-assets-declaration',
  templateUrl: './assets-declaration.component.html',
  styleUrls: ['./assets-declaration.component.scss'],
})
export class AssetsDeclarationComponent implements OnInit {
  uiText = DECLARATION_ASSETS_DATA;
  heading = ASSET_DECLARATION_HEADING;
  table_data = [];
  dataSource = new MatTableDataSource<any>();
  requestShow: boolean = false;
  assetDeclarationForm!: FormGroup;
  errorMessage;
  constructor(
    private _formBuilder: FormBuilder,
    private _formService: FormServiceService
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.table_data);
    this.errorMessage = validationMessage;
    this.createForm();
  }
  showForm() {
    this.requestShow = !this.requestShow;
    const element = document.querySelector('.mat-paginator-page-size');
    console.log(element, 'elemnet');
    element.classList.add('mat-paginator-size-expand');
    if (!this.requestShow) {
      element.classList.remove('mat-paginator-size-expand');
    }
  }
  createForm() {
    this.assetDeclarationForm = this._formBuilder.group({
      id: this._formService.getControl('id'),
      code: this._formService.getControl('code'),
      serialnumber: this._formService.getControl('serialnumber'),
      modelnumber: this._formService.getControl('modelnumber'),
      os: this._formService.getControl('os'),
      osversion: this._formService.getControl('osversion'),
      brand: this._formService.getControl('brand'),
      color: this._formService.getControl('color'),
      workingcondition: this._formService.getControl('workingcondition'),
      assetimage: this._formService.getControl('assetimage'),
    });
  }
  get assetDeclarationFormControl() {
    return this.assetDeclarationForm.controls;
  }
  submit(){

  }
}
