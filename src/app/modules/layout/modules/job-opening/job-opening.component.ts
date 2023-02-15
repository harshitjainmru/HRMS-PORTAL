import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JOB_OPENING, LATEST_JOB_OPENING } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';

@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.scss']
})
export class JobOpeningComponent implements OnInit {
  uiMessage = JOB_OPENING;
  cardLogo = LATEST_JOB_OPENING;
  title = TITLE.JOB_OPENING_TITLE
  constructor(private _title: Title) { }

  ngOnInit(): void {
    this._title.setTitle(this.title);
  }

}
