import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddnewComponent } from './addnew.component';
import { MatIconModule } from '@angular/material/icon';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropDownModule } from '../drop-down/drop-down.module';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AddnewComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    DropDownModule,
  ],
  exports:[AddnewComponent]
})
export class AddnewModule { }
