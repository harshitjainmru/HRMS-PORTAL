import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { LATEST_APPINVENTIV } from 'src/app/constants/text';

@Component({
  selector: 'app-latest-appinventiv',
  templateUrl: './latest-appinventiv.component.html',
  styleUrls: ['./latest-appinventiv.component.scss']
})
export class LatestAppinventivComponent implements OnInit,AfterViewInit {
headerValue=LATEST_APPINVENTIV
dataSource: any = [];
listOfNewFamilyMembers = [1,2];
buttonShow: boolean = true;
showList:boolean = true

@ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
  ElementRef<HTMLDivElement>
>;
carouselConfig: NguCarouselConfig = {
  grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
  load: 2,
  interval: { timing: 4000, initialDelay: 1000 },
  loop: false,
  touch: true,
  velocity: 0.2,
  easing: 'cubic-bezier(0, 0, 0.2, 1)',
  animation:'lazy'
};
constructor() {}

ngOnInit(): void {}
ngAfterViewInit(): void {
  this.listToShow.forEach((item: any) => {
    this.dataSource.push(item);
  });
}

}
