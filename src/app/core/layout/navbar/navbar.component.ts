import { Component, OnInit } from '@angular/core';
// import{AuthenticationService} from 'src/app/core/services/authentication/authentication.service';
import {Router} from '@angular/router';
import { AppComponent } from '../../../app.component';
import { interval } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  constructor(
    public router:Router) {
  }

  ngOnInit() {
  }

  logout(){
    localStorage.clear()
  }
}
