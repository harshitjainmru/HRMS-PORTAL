import { Component, OnInit } from '@angular/core';
import { MYPERFORMACE_VALUE } from 'src/app/constants/text';

@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss']
})
export class MyPerformanceComponent implements OnInit {
uiText =MYPERFORMACE_VALUE
  constructor() { }

  ngOnInit(): void {
  }

}
