import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { TICKET_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  uiText = TICKET_DATA
  requestShow:boolean = false
  ticketForm!:FormGroup
  dataSource = new MatTableDataSource<any>();
  constructor(private _formBuilder:FormBuilder,private _formService:FormServiceService) { }



  ngOnInit(): void {
    this.createForm()
    this.dataSource = new MatTableDataSource<any>(this.uiText.table_data);
  }
  createForm(){
    this.ticketForm = this._formBuilder.group({
      subject:'',
      department:'',
      ticketCategory:'',
      priority:'',
      editor:''

    })
  }
  get ticketFormControl(){
    return this.ticketForm.controls;
  }
  showDiv(data){
    console.log(data);
  }
  submitHandler(){
    console.log(this.ticketForm);

  }
}
