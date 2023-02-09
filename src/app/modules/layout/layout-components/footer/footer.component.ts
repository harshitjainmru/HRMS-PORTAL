import { Component, OnInit } from '@angular/core';
import { LAYOUT } from 'src/app/constants/text';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
uiMessage=LAYOUT
  constructor() { }

  ngOnInit(): void {
  }

}
