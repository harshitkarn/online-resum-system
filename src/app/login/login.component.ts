import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private getUserUrl = 'http://localhost:8085/findByUserNameAndPasswordAndUserType';
  formData = {
    username:"",
    pwd:''
  };
  constructor(private router: Router, private route: ActivatedRoute, private auth:AuthService) {}

  ngOnInit(){
    if(this.auth.loginStatus()){
      this.router.navigate(['/dashboard']);
    }
  }

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.formData = { ...this.formData, [input.name]: input.value };
  }

  submitHandler(){
    fetch(`${this.getUserUrl}/${this.formData.username}/${this.formData.pwd}/admin`).then((response)=>response.json()).then((data)=> {
      if(data.userName==null){
        alert('invalid username or password');
      }
      else{
        localStorage.setItem("userLoginDetails",JSON.stringify(data));
        window.location.href="dashboard";
      }
    })
  }
}
