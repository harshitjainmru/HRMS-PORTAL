import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NguCarouselConfig } from '@ngu/carousel';
import { validationMessage } from 'src/app/constants/error-messages';
import { COVID19_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss'],
})
export class Covid19Component implements OnInit, AfterViewInit {
  uitext = COVID19_DATA;
  constructor(
    private dialogRef: MatDialogRef<Covid19Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder:FormBuilder,
    private formService:FormServiceService
  ) {}
  buttonShow: boolean = true;
  showList: boolean = true;
  dataSource: any = [];
  covidForm!:FormGroup
  errorMessage;
  @ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
    ElementRef<HTMLDivElement>
  >;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1, all: 0 },
    gridBreakpoints: { sm: 768, md: 992, lg: 1200, xl: 1798 },
    load: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };

  ngAfterViewInit(): void {
    this.listToShow.forEach((item: any) => {
      this.dataSource.push(item);
    });
  }

  ngOnInit(): void {
    this.createForm();
    this.errorMessage = validationMessage
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }
  createForm(){
    this.covidForm = this.formBuilder.group({
      title:this.formService.getControl('title'),
      contact:this.formService.getControl('contact'),
      address:this.formService.getControl('address'),
      description:this.formService.getControl('description')
    })
  }
  onSubmit(){

  }
}
