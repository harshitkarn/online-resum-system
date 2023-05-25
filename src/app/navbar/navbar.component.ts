import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;


  constructor(private router: Router, private auth:AuthService, private toastr:ToastrService) { }

  ngOnInit() {
    if(this.auth.loginStatus()){
      this.isLoggedIn = true;
    }
  }

  logout(){
    localStorage.removeItem("userLoginDetails");
    this.isLoggedIn = false;
    setTimeout(() => this.toastr.success('Logged Out Successfully'))
    this.router.navigate(['/'])
  }
  

}
