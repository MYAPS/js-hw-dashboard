import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit , AfterViewChecked{

  @Input()
  tableHeaders:Array<string>;
  @Input()
  tableRows:any;
  constructor() { }
  ngAfterViewChecked(): void {

  }

  ngOnInit() {
  }

}
