import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EXPOLRE_VALUE, INDUSTRY_DATA, TYPE_DATA } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
uiText=EXPOLRE_VALUE
industryDropdownValue = INDUSTRY_DATA
typeDropdownValue = TYPE_DATA
  constructor(private _title:Title) { }

  ngOnInit(): void {
    this._title.setTitle(TITLE.EXPLORE_TITLE)
  }

}
