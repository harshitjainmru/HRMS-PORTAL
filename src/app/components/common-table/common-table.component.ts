import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TABLE_DATA_UNAVAILABLE } from 'src/app/constants/text';
import { TableColumn } from 'src/app/models/table-interface';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent implements OnInit {
  uiMessage = TABLE_DATA_UNAVAILABLE;
  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  @Input() columns!: any;
  @Input() dataSource:any=[];
  @Input() Table_DATA!: any;
  @Input() PageSizeInRow!: boolean;
  @Input() checkBox!: string;
  @Input() isPageable = true;
  @Input() isSearchText = true;
  @Input() paginationSizes: number[] = [10, 25, 50, 100];
  @Output() userDetail: EventEmitter<any> = new EventEmitter();
  public displayedColumns: any = [];

  constructor() {}

  // get ds(){
  //   console.log(this.dataSource.data,"1233");

  //   return this.dataSource.data;
  // }
  ngOnInit(): void {
    this.columns.forEach((item: any) => {
      this.displayedColumns.push(item.heading);
    });
    this.columns.map((tableColumn: TableColumn) => tableColumn.heading);
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

}
