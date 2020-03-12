import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.css']
})
export class CardLayoutComponent implements OnInit {

  @Input()
  data:any;
  constructor() { }

  ngOnInit() {
  }

}
