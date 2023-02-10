import { Component, OnInit } from '@angular/core';
import { DIRECTORY_EMPLOYEE_DATA, DIRECTORY_VALUE } from 'src/app/constants/text';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
headerValue=DIRECTORY_VALUE
empData=DIRECTORY_EMPLOYEE_DATA
  constructor() { }

  ngOnInit(): void {
  }

}
