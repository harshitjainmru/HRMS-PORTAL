import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { MY_PITCH_HEADING } from 'src/app/constants/tables';
import { MY_PITCH } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';

@Component({
  selector: 'app-my-pitch',
  templateUrl: './my-pitch.component.html',
  styleUrls: ['./my-pitch.component.scss']
})
export class MyPitchComponent implements OnInit {
uiText=MY_PITCH
dataSource = new MatTableDataSource<any>();
heading = MY_PITCH_HEADING
Table_DATA = []

constructor(private _title: Title) {}

ngOnInit(): void {
  this._title.setTitle(TITLE.myPtich_title);
  this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
}

}
