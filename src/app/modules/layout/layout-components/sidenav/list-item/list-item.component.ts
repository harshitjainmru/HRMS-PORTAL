import { Component, Input, OnInit } from '@angular/core';
import { IsideNav, sideNavList } from 'src/app/constants/sidenav';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() navlist!: IsideNav;
  @Input() isShowing!: boolean;
  showSubmenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
