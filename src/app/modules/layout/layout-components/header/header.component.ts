import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LAYOUT } from 'src/app/constants/text';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  uiText=LAYOUT

  @Output() stateChange:EventEmitter<boolean> =new EventEmitter<boolean>();
  @Input() smallWindow!:boolean;

  isExpanded=true;
  profileOpen=false;
  constructor(
  ) { }

  ngOnInit(): void {

  }

  expand(){

    this.isExpanded=!this.isExpanded;
    this.stateChange.emit(this.isExpanded)
  }

}
