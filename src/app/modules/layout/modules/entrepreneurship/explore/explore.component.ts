import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { EXPOLRE_VALUE, INDUSTRY_DATA, TYPE_DATA } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
uiText=EXPOLRE_VALUE
industryDropdownValue = INDUSTRY_DATA
typeDropdownValue = TYPE_DATA
ideaForm!:FormGroup
  constructor(private _title:Title, private _formBuilder:FormBuilder,private _formService:FormServiceService) { }

  ngOnInit(): void {
    this._title.setTitle(TITLE.explore_title)
    this.createForm();

  }
  createForm(){
    this.ideaForm = this._formBuilder.group({
      name:this._formService.getControl('name'),
      emp_id:this._formService.getControl('emp_id'),
      dob:this._formService.getControl('dob'),
      pitch_title:this._formService.getControl('pitch_title'),
      industry:this._formService.getControl('industry'),
      pitch_type:this._formService.getControl('pitch_type'),
      editor:this._formService.getControl('editor'),
      presentation:this._formService.getControl('presentation'),
    })

  }
  get ideaFormControl(){
    return this.ideaForm.controls
  }

}
