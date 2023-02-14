import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() label!: any;
  @Input() Data!:any;
  @Input() CSSClass!:any;
  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  constructor() {}

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
