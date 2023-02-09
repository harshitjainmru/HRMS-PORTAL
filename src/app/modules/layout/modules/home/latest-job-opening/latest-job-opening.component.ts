import { Component, OnInit } from '@angular/core';
import { JOB_OPENING, LATEST_JOB_OPENING } from 'src/app/constants/text';

@Component({
  selector: 'app-latest-job-opening',
  templateUrl: './latest-job-opening.component.html',
  styleUrls: ['./latest-job-opening.component.scss']
})
export class LatestJobOpeningComponent implements OnInit {
uiMessage=JOB_OPENING
cardLogo=LATEST_JOB_OPENING

  constructor() { }

  ngOnInit(): void {
  }

}
