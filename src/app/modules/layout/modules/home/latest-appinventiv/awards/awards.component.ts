import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { AWARDS_EMP_IMAGE_DATA, AWARDS_VALUE } from 'src/app/constants/text';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit, AfterViewInit {
awardValue=AWARDS_VALUE
imageData = AWARDS_EMP_IMAGE_DATA
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
