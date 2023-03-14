import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { HelpDialogComponent } from 'src/app/components/help-dialog/help-dialog.component';
import { LogoutConfirmationComponent } from 'src/app/components/logout-confirmation/logout-confirmation.component';
import { ABS_ACCOUNT_LOGIN } from 'src/app/constants/absolute-routes';
import { LAYOUT } from 'src/app/constants/text';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  uiText = LAYOUT;
  @ViewChild("drawer", { static: true }) drawer: MatDrawer;

  @Output() stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() smallWindow!: boolean;

  isExpanded = true;
  profileOpen = false;
  constructor(private dialog: MatDialog,
    private _router:Router
    ) {}

  ngOnInit(): void {}

  expand() {
    this.isExpanded = !this.isExpanded;
    this.stateChange.emit(this.isExpanded);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(HelpDialogComponent, {
      disableClose: true,
    });
  }
  openLogoutDialog() {
    const dialogRef = this.dialog.open(LogoutConfirmationComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((confirmed: any) => {
      console.log(confirmed,'qwerty');

      if (confirmed!='cancel') {
        this._router.navigate([ABS_ACCOUNT_LOGIN.fullUrl])
      }
    });
  }
  toggleNotification() {
    this.drawer.toggle();
    console.log('hiii');
    // console.log(this.items.length);
    // console.log(this.drawer.opened);
    if (this.drawer.opened) {
      setTimeout(() => {
        // this.toggleList();
      }, 400);
    } else {
      // this.clearList();
    }
  }
}
