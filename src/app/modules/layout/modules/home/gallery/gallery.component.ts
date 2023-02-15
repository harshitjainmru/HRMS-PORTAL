import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Gallery_DATA, GALLER_VALUE } from 'src/app/constants/text';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {
headerValue=GALLER_VALUE
imageData=Gallery_DATA
buttonShow: boolean = true;
showList: boolean = true;
@ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
  ElementRef<HTMLDivElement>
>;
carouselConfig: NguCarouselConfig = {
  grid: { xs: 1, sm: 3, md: 3, lg: 3, all: 0 },
  load: 1,
  interval: { timing: 4000, initialDelay: 1000 },
  loop: true,
  touch: true,
  velocity: 0.2,
  point: {
    visible: true,
    hideOnSingleSlide: true
  }
};
dataSource: any = [];

constructor() {}

ngOnInit(): void {

}
ngAfterViewInit(): void {
  setTimeout(() => {
    this.listToShow.forEach((item: any) => {
      this.dataSource.push(item);
    });
  }, 500);

}

}
