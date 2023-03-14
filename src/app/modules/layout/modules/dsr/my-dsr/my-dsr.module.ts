import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDsrRoutingModule } from './my-dsr-routing.module';
import { MyDsrComponent } from './my-dsr.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AddnewModule } from 'src/app/modules/shared/addnew/addnew.module';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    MyDsrComponent
  ],
  imports: [
    CommonModule,
    MyDsrRoutingModule,
    SharedModule,
    AddnewModule,
    MatCheckboxModule,
    DropDownModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class MyDsrModule { }
