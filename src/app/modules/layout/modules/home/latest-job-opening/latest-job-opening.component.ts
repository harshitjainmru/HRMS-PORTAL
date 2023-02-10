import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';
import { JOB_OPENING, LATEST_JOB_OPENING } from 'src/app/constants/text';

@Component({
  selector: 'app-latest-job-opening',
  templateUrl: './latest-job-opening.component.html',
  styleUrls: ['./latest-job-opening.component.scss'],
})
export class LatestJobOpeningComponent implements OnInit, AfterViewInit {
  uiMessage = JOB_OPENING;
  cardLogo = LATEST_JOB_OPENING;
  // listOfNewFamilyMembers = [1, 2, 3];
  dataSource: any = [];
  @ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
    ElementRef<HTMLDivElement>
  >;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.listToShow.forEach((item: any) => {
      this.dataSource.push(item);
    });
  }
}
