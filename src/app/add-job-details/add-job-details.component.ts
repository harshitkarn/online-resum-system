import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.services';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-job-details',
  templateUrl: './add-job-details.component.html',
  styleUrls: ['./add-job-details.component.css'],
})
export class AddJobDetailsComponent implements OnInit {
  private url = 'http://localhost:8085/addJobDetails';
  formData = {
    jobProfile: '',
    skill: '',
    exp_min: 0,
    exp_max: 0,
    salary: 0,
  };
  
  dataEntererd = {
    exp_min: false,
    exp_max: false,
    salary: false,
  };

  constructor(private router: Router, private auth:AuthService, private toastr:ToastrService) {}

  ngOnInit(){
    if(!this.auth.loginStatus()){
      this.router.navigate(['/']);
    }
  }

  submitHandler() {
    if(this.formData.jobProfile.trim()==""){
      setTimeout(() => this.toastr.error('Job title can\'t be empty'))
    }
    else if(this.formData.skill.trim()==""){
      setTimeout(() => this.toastr.error('Skill can\'t be empty'))
    }
    else if(!this.dataEntererd.exp_max||!this.dataEntererd.exp_min){
      setTimeout(() => this.toastr.error('Experience can\'t be empty'))
    }
    else if(this.formData.exp_min>40||this.formData.exp_max>40){
      setTimeout(() => this.toastr.error('Experience can\'t be more than 40 yrs'))
    }
    else if(this.formData.exp_min>this.formData.exp_max){
      setTimeout(() => this.toastr.error('Min exp can\'t be greater than max exp'))
    }
    else if(!this.dataEntererd.salary){
      setTimeout(() => this.toastr.error('Salary can\'t be empty'))
    }
    else{
      fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(this.formData),
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((response) => response.json())
        .then(() => {
          setTimeout(() => this.toastr.success('Job Added Successfully'))
          this.router.navigate(['/dashboard']);
        });
    }
  }

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (['exp_min', 'exp_max', 'salary'].includes(input.name)) {
      const len = input.name=='salary'?9:2;
      if(input.value.length>len){
        input.value = input.value.substring(0,len)
        this.formData = { ...this.formData, [input.name]: (parseInt(input.value.substring(0,len))) };
        return;
      }
      if(input.value==""){
        this.dataEntererd = { ...this.dataEntererd, [input.name]: false };
        this.formData = { ...this.formData, [input.name]: 0 };
        return;
      }
      else{
        this.dataEntererd = { ...this.dataEntererd, [input.name]: true };
      }
      this.formData = { ...this.formData, [input.name]: parseInt(input.value) };
      return;
    }
    this.formData = { ...this.formData, [input.name]: input.value };
  }
}
