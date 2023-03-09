import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsDeclarationRoutingModule } from './assets-declaration-routing.module';
import { AssetsDeclarationComponent } from './assets-declaration.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AssetsDeclarationComponent
  ],
  imports: [
    CommonModule,
    AssetsDeclarationRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    DropDownModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AssetsDeclarationModule { }
