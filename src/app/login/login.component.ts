import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'src/utils/cookie.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData = {
    username:"",
    pwd:''
  };
  constructor(private router: Router, private route: ActivatedRoute, private cookieService:CookieService) {}

  async ngOnInit(){
    if(await this.cookieService.checkAuth()){

   this.router.navigate(['/dashboard']);

    }
  }

  defaultCreds = {
    username:"admin",
    pwd:"admin"
  }

  login() {
    console.log(this.formData)
    if(this.formData.username === this.defaultCreds.username && this.formData.pwd === this.defaultCreds.pwd) {
    this.cookieService.setCookie("login" , "some_token")
    
    this.router.navigate(['/dashboard']);
    }
   else alert("Login Failed")
  }

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.formData = { ...this.formData, [input.name]: input.value };
  }

}
