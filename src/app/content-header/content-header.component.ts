import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {

  constructor(private authenticationService: AuthService<string>) { }

  ngOnInit() {
  }
  logout() {
    this.authenticationService.logout();
  }
}
