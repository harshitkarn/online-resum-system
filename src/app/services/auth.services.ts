import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private getUserUrl = 'http://localhost:8085/findByUserNameAndPasswordAndUserType';
  userLoginDetails = {
    userName:'',
    password:'',
    userType:''
  };
  constructor() { }
  
  loginStatus(){
    if(localStorage.getItem("userLoginDetails")==null)return false;
    else{
      this.userLoginDetails = JSON.parse(localStorage.getItem("userLoginDetails") || JSON.stringify(this.userLoginDetails));
      fetch(`${this.getUserUrl}/${this.userLoginDetails.userName}/${this.userLoginDetails.password}/${this.userLoginDetails.userType}`).then((response)=>response.json()).then((data)=> {
        if(data.userName==null){
          console.log(localStorage.getItem("userLoginDetails"))
          return false;
        }
        else{
          return true;
        }
      })
    }
    return true;
  }
}