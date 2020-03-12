import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input()
  data:any;
  constructor() { 
    

  }

  ngOnInit() {
    this.data.testStatus = 'Failed';
    this.data.testStatusClass = 'bg-gradient-danger text-gray-300';
    if(this.data.totalTests == this.data.passedTests){
			this.data.testStatus = 'Pass';
			this.data.testStatusClass = 'bg-gradient-success text-gray-100';
		}else if(this.data.failedTestCount < (this.data.totalTestCount*0.11) ){
			this.data.testStatus = 'Fail/Warning';
			this.data.testStatusClass = 'bg-gradient-warning text-gray-100';
		}

  }

}
