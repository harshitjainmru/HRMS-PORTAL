import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.scss']
})
export class AddnewComponent implements OnInit {
  requestShow:boolean = false
  @Input() title;
  @Input() labelData;
  @Input() button;
  @Output() buttonToggle : EventEmitter <any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  showDiv(){
    this.requestShow = !this.requestShow
    this.buttonToggle.emit(this.requestShow)
    const element = document.querySelector('.mat-paginator-page-size');
    console.log(element, 'elemnet');
    element.classList.add('mat-paginator-size-page-expand');
    if (!this.requestShow) {
      element.classList.remove('mat-paginator-size-page-expand');
    }
  }


}
