import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ACCOUNT } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';
@Component({
  selector: 'app-login-with-google',
  templateUrl: './login-with-google.component.html',
  styleUrls: ['./login-with-google.component.scss']
})
export class LoginWithGoogleComponent implements OnInit {

  message=ACCOUNT
  button_text='Login with credentials'

  constructor(
    private _title:Title

  ) {
    this._title.setTitle(TITLE.LOGIN_TITLE)
  }

  ngOnInit(): void {
  }

}
