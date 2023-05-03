import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;


  constructor(private router: Router, private auth:AuthService) { }

  ngOnInit() {
    if(this.auth.loginStatus()){
      this.isLoggedIn = true;
    }
  }

  logout(){
    localStorage.removeItem("userLoginDetails");
    this.isLoggedIn = false;
    this.router.navigate(['/'])
  }
  

}
