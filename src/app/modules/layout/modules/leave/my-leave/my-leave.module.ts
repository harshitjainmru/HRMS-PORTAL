import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLeaveRoutingModule } from './my-leave-routing.module';
import { MyLeaveComponent } from './my-leave.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    MyLeaveComponent
  ],
  imports: [
    CommonModule,
    MyLeaveRoutingModule,
    SharedModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    DropDownModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule

  ]
})
export class MyLeaveModule { }
