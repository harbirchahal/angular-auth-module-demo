import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedUser: any;

  constructor(
    private authService: AuthenticationService
  ) {
    this.loggedUser = this.authService.getLoggedIn();
  }

  ngOnInit() {
  }

}
