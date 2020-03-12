import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataUtilService {
  convert(mockData: { userList: string[]; name: string; totalSuits: number; totalHomeWorks: number; totalTests: number; totalUsers: number; submittedUsers: number; reports: any[]; }): any {
    let data = {};
    //dattmockData

  }

  constructor() { }
}
