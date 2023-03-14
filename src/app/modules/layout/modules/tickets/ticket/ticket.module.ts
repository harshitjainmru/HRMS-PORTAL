import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import { AddnewModule } from 'src/app/modules/shared/addnew/addnew.module';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    TicketComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    DropDownModule,
    AddnewModule,
    SharedModule
  ]
})
export class TicketModule { }
