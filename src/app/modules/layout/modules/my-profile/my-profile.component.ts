import { Component, OnInit } from '@angular/core';
import { slideInRight } from 'src/animations/slideInRight';
import {
  LAYOUT_MY_PROFILE,
  LAYOUT_MY_PROFILE_USER_INFO,
} from 'src/app/constants/text';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  animations: [slideInRight],
})
export class MyProfileComponent implements OnInit {
  detailData: any = {
    routerLink: 'details',
  };
  uiMessage = LAYOUT_MY_PROFILE;
  userInfo = LAYOUT_MY_PROFILE_USER_INFO;
  constructor() {}

  ngOnInit(): void {}

  changeTab(data: any) {
    this.detailData = data;
  }
  // isActive(item: any) {
  //   // return this.detailData === item ? item : null;
  //   if(this.detailData.routerLink==='details'){
  //     return this.detailData ===item ? item :null
  //   }else{
  //     return this.detailData === item ? item : null
  //   }

  // }
}
