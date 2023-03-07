import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { REQUESTED_TRAINING_HEADING } from 'src/app/constants/tables';
import { TITLE } from 'src/app/constants/title';

@Component({
  selector: 'app-requested-trainings',
  templateUrl: './requested-trainings.component.html',
  styleUrls: ['./requested-trainings.component.scss']
})
export class RequestedTrainingsComponent implements OnInit {
headerValue = TITLE.requested_trainings
tableHeading = REQUESTED_TRAINING_HEADING
dataSource = new MatTableDataSource<any>();
table_data
  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.headerValue)
    this.dataSource = new MatTableDataSource<any>(this.table_data);
  }


}
