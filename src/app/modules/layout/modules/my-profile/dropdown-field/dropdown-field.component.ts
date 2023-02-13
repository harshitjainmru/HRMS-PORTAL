import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  styleUrls: ['./dropdown-field.component.scss'],
})
export class DropdownFieldComponent implements OnInit {
  @Input() label!: any;
  @Input() Data!:any;
  @Input() CSSClass!:any;
  Table_DATA: any;
  myControl = new FormControl('');
  pageSize = false;
  constructor() {}
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        let res = this._filter(value || '');
        if (!res.length) {
          res = ['no results Found'];
        }
        console.log(res);
        return res;
      })
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.Data.filter((option:any) => {
      const res = option?.toLowerCase().includes(filterValue);

      return res;
    });
  }
}
