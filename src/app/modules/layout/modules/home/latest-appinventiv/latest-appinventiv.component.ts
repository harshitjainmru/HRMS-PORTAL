import { Component, OnInit } from '@angular/core';
import { LATEST_APPINVENTIV } from 'src/app/constants/text';

@Component({
  selector: 'app-latest-appinventiv',
  templateUrl: './latest-appinventiv.component.html',
  styleUrls: ['./latest-appinventiv.component.scss']
})
export class LatestAppinventivComponent implements OnInit {
headerValue=LATEST_APPINVENTIV
  constructor() { }

  ngOnInit(): void {
  }

}
