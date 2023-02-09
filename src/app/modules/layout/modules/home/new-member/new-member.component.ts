import { Component, OnInit } from '@angular/core';
import { NEW_FAMILY } from 'src/app/constants/text';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss']
})
export class NewMemberComponent implements OnInit {
uiMessage=NEW_FAMILY
  constructor() { }

  ngOnInit(): void {
  }

}
