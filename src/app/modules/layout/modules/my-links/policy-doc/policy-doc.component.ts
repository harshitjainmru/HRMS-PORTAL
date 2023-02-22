import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { TITLE } from 'src/app/constants/title';

@Component({
  selector: 'app-policy-doc',
  templateUrl: './policy-doc.component.html',
  styleUrls: ['./policy-doc.component.scss']
})
export class PolicyDocComponent implements OnInit {
  headerValue=TITLE.policy_title
  dataSource = new MatTableDataSource<any>();
  heading = [
    {heading:'#',key:'sNo',type:'text'},
    { heading: 'Name', key:'name',type:'text_with_icon', action: ['picture_as_pdf'] },
    { heading: 'Type', key: 'doctype', type: 'text'},
    { heading: 'File size  ', key:'size',type:'text'},
    { heading: 'Last Modified', key:'date',type:'text'},
    {heading:'Action',key:'download',type:'download'}
  ]
  Table_DATA: any[] = [
    {'sNo':1,'name':'Appinventiv_policy_manual','doctype':'pdf','size':'345kb','date':'25-07-2022','download':'download','link':'https://dashboard.appinventiv.com/admin/repository/file-download?file=uploads/hr/policy/Appinventiv_Policy_Manual.pdf' },
    {'sNo':2,'name':'Appinventiv_Conatct_List','doctype':'pdf','size':'345kb','date':'25-07-2022','download':'download','link':'/assets/christmas/award_167229202066.jpg' },
    {'sNo':4,'name':'Leave Policy','doctype':'pdf','size':'345kb','date':'25-07-2022','download':'download','link':'https://dashboard.appinventiv.com/admin/repository/file-download?file=uploads/hr/policy/Appinventiv_Policy_Manual.pdf' },

  ];

  constructor(private _title:Title) { }

  ngOnInit(): void {
    this._title.setTitle(TITLE.policy_title)
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

}
