import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { NEW_FAMILY } from 'src/app/constants/text';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss'],
})
export class NewMemberComponent implements OnInit, AfterViewInit {
  uiMessage = NEW_FAMILY;
  buttonShow: boolean = true;
  listOfNewFamilyMembers = [1, 2, 3];
  @ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
    ElementRef<HTMLDivElement>
  >;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 2, lg: 2,xl:1, all: 0 },
    gridBreakpoints: {sm: 768, md: 992, lg: 1200, xl: 1781},
    load: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
  dataSource: any = [];

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.listToShow.forEach((item: any) => {
      this.dataSource.push(item);
    });
  }
}
