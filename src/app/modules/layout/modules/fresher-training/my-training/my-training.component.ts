import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FRESHER_TRAINING_DATA } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';

@Component({
  selector: 'app-my-training',
  templateUrl: './my-training.component.html',
  styleUrls: ['./my-training.component.scss']
})
export class MyTrainingComponent implements OnInit {
  headerValue=FRESHER_TRAINING_DATA
  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle(TITLE.my_training_title)
  }

}
