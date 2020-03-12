import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.css']
})
export class TableLayoutComponent implements OnInit {

  @Input()
  tableHeaders:Array<string>;
  @Input()
  tableRows:any;
  constructor() { }

  ngOnInit() {
  }

}
