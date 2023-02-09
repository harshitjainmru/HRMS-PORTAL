import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../../modules/shared/custom-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  duration = 3000;

  constructor(private snack: MatSnackBar) {}

  showToast(msg: any) {
    this.snack.openFromComponent(CustomSnackbarComponent, {
      duration: this.duration,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: 'toast-prm',
      data: {
        message: msg,
        icon: '',
      },
    });
  }

  showSuccessToast(msg:any) {
    this.snack.openFromComponent(CustomSnackbarComponent, {
      data: {
        message: msg,
        icon: 'done',
      },
      // duration: this.duration,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: 'toast-success-prm',
    });
  }

  showErrorToast(msg:any) {
    this.snack.openFromComponent(CustomSnackbarComponent, {
      data: {
        message: msg,
        icon: 'error',
      },
      duration: this.duration,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: 'toast-error-prm',

    });
  }
}
