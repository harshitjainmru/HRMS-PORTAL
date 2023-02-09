import { Component, OnInit } from '@angular/core';
import { slideInRight } from 'src/animations/slideInRight';
import { PROFILE_PICTURE_VALUE } from 'src/app/constants/text';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
  animations:[slideInRight]
})
export class ProfilePictureComponent implements OnInit {
uiMessage=PROFILE_PICTURE_VALUE
  constructor() { }

  ngOnInit(): void {
  }

}
