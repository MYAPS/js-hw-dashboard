import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/services/authentication.service';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  logout(){
    this.authenticationService.logout();
  }
}
