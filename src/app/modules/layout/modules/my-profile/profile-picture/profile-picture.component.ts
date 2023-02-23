import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { slideInRight } from 'src/animations/slideInRight';
import { PROFILE_PICTURE_VALUE } from 'src/app/constants/text';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
  animations:[slideInRight]
})
export class ProfilePictureComponent implements OnInit {
uiMessage=PROFILE_PICTURE_VALUE
pictureForm!:FormGroup
  constructor(private _formBuilder:FormBuilder, private utility:UtilityServiceService) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
this.pictureForm = this._formBuilder.group({
image:['',Validators.required]
})
  }
  submitHandler(){
    console.log(this.pictureForm);
    if(this.pictureForm.valid){
      console.log(this.pictureForm);
    }else{
      this.utility.showErrorToast('Select profile picture')
    }
  }

}
