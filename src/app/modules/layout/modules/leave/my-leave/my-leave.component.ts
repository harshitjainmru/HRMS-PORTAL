import { Component, OnInit } from '@angular/core';
import { MY_LEAVE_DATA } from 'src/app/constants/text';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss']
})
export class MyLeaveComponent implements OnInit {
  uiText = MY_LEAVE_DATA
  requestShow :boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  showDiv(){
    this.requestShow = !this.requestShow;

  }
}
