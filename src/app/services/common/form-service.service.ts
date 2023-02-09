import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { LIMIT } from 'src/app/constants/limit';
import { PATTERN } from 'src/app/constants/pattern';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  constructor() {}

  VALIDATION = {
    email: [
      Validators.pattern(PATTERN.EMAIL_PATTERN),
      Validators.email,
      Validators.maxLength(LIMIT.MAX_EMAIL_LENGTH),
    ],
    password: [Validators.pattern(PATTERN.PASSWORD_PATTERN)],
  };

  getControl(name: string, required = true) {
    //@ts-ignore: unreachable code error

    let compose = [...this.VALIDATION[name]];
    if (required) {
      if (name === 'checkbox') {
        compose.splice(0, 0, Validators.requiredTrue);
      } else {
        compose.splice(0, 0, Validators.required);
      }
    }
    return [null, compose];
  }
}
