import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from './custom-snackbar.component';
import { CommonTableComponent } from 'src/app/components/common-table/common-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    CustomSnackbarComponent,
    CommonTableComponent,
  ],
  imports: [CommonModule,
     MatIconModule,
     MatSnackBarModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
    ],
    exports: [CommonTableComponent]
})
export class SharedModule {}
