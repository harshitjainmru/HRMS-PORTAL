import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TABLE_DATA_UNAVAILABLE } from 'src/app/constants/text';
import { TableColumn } from 'src/app/models/table-interface';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {
uiMessage=TABLE_DATA_UNAVAILABLE
  @ViewChild(MatPaginator, { static: false }) matPaginator!: MatPaginator;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  @Input() columns!: any;
  @Input() dataSource!: any;
  @Input() Table_DATA!: any;
  @Input() PageSizeInRow!:boolean;
  @Input() checkBox!: string;
  @Input() isPageable = true;
  @Input() paginationSizes: number[] = [10, 25, 50 ,100];
  @Input() set pageSize(size: any) {
    if(size)
      this.changePageSize(size);
  }
  @Output() userDetail: EventEmitter<any> = new EventEmitter();
  public displayedColumns: any = [];
  constructor(

  ) {}

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.columns.forEach((item: any) => {
      this.displayedColumns.push(item.heading);
    });
    this.columns.map((tableColumn: TableColumn) => tableColumn.heading);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.matPaginator;
    // this._filter.searchKey$.subscribe((response: any) => {
    //   this.dataSource.filter = response.trim().toLowerCase();
    // });
  }
  // handleClick1(data: any, type: any) {
  //   console.log(type, 'ji', data);
  // }
  // handleClick() {
  //   const options = {
  //     title: 'Delete?',
  //     message: 'Are you sure want to delete this detail?',
  //     cancelText: 'No',
  //     confirmText: 'Yes',
  //   };

  //   this.dialogService.open(options);

  //   this.dialogService.confirmed().subscribe((confirmed) => {
  //     if (confirmed) {
  //       // this.saveData();
  //     }
  //   });
  // }
  // handleClik() {
  //   const options = {
  //     title: 'Block?',
  //     message: 'Are you sure want to block this detail?',
  //     cancelText: 'No',
  //     confirmText: 'Yes',
  //   };

  //   this.dialogService.open(options);

  //   this.dialogService.confirmed().subscribe((confirmed) => {
  //     if (confirmed) {
  //       // this.saveData();
  //     }
  //   });
  // }
  changePageSize(size: number) {
    this.matPaginator._changePageSize(size)
  }

}
