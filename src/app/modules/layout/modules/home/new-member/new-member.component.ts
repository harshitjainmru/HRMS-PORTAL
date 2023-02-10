import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NEW_FAMILY } from 'src/app/constants/text';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss']
})
export class NewMemberComponent implements OnInit,AfterViewInit {
uiMessage=NEW_FAMILY
buttonShow:boolean = true
listOfNewFamilyMembers=[1,2,3]
@ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
dataSource:any=[]


  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })
}}
