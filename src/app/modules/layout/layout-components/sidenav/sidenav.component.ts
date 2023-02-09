import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { sideNavList } from 'src/app/constants/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() isExpanded!: boolean;
  @Input() isShowing!: boolean;


  @Output() stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  showSubmenu: boolean = false;
  showSubSubMenu: boolean = false;
  sidenav=sideNavList

  constructor(private observer:BreakpointObserver) {}

  ngOnInit(): void {
  }


  expand() {
    this.stateChange.emit(this.isExpanded);
  }
}
