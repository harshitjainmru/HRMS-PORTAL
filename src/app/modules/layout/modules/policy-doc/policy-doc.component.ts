import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TITLE } from 'src/app/constants/title';

@Component({
  selector: 'app-policy-doc',
  templateUrl: './policy-doc.component.html',
  styleUrls: ['./policy-doc.component.scss']
})
export class PolicyDocComponent implements OnInit {

  constructor(private _title:Title) { }

  ngOnInit(): void {
    this._title.setTitle(TITLE.POLICY_TITLE)
  }

}
