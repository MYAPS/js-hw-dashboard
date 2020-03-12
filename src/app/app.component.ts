import { Component } from '@angular/core';
import { mockData } from './mock-data/mock-data';
import { DataUtilService } from './data-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  title = 'js-hw-dashboard';
  constructor(service:DataUtilService){
    this.data = mockData;

  }

}
