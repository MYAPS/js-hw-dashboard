import { Component } from '@angular/core';
import { mockData } from './mock-data/mock-data';
import { DataUtilService } from './data-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.root.component.html',
  styleUrls: ['./app.root.component.css']
})
export class AppRootComponent {
  data:any;
  title = 'js-hw-dashboard';
  constructor(service:DataUtilService){
    this.data = mockData;

  }

}
