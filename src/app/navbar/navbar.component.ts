import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/utils/cookie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  buttonName = 'Log In'
  isLoggedIn = false


  constructor(private router: Router , private cookieService: CookieService) { }
 
  private updateLoginButtonText(isLoggedIn: boolean) {
    this.buttonName = isLoggedIn ? 'Logout' : 'Login';
  }

    ngOnInit() {
      this.cookieService.loginStatus$.subscribe(isLoggedIn => {
        this.updateLoginButtonText(isLoggedIn);
      });
     this.isLoggedIn = this.cookieService.checkAuthSync();
      this.updateLoginButtonText(this.isLoggedIn);
    }
  

  async checkLogin(){

    if(await this.cookieService.checkAuth()){
      this.cookieService.eraseCookie('login');
      console.log(this.isLoggedIn , 1)
     return  this.router.navigate(['/login'])
    }
    else{
      console.log(this.isLoggedIn , 2)

     return this.router.navigate(['/dashboard']);
    }
  }

}
