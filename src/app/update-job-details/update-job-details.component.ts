import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.services';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-job-details',
  templateUrl: './update-job-details.component.html',
  styleUrls: ['./update-job-details.component.css']
})

export class UpdateJobDetailsComponent implements OnInit {
  
  private updateUrl = 'http://localhost:8085/updateJobDetails';
  private getJobUrl = 'http://localhost:8085/getJobById/';
  formData = {
    jobProfile: '',
    skill: '',
    exp_min: 0,
    exp_max: 0,
    salary: 0,
    jobId:0
  };
  constructor(private router: Router, private route: ActivatedRoute, private auth:AuthService, private toastr:ToastrService) {}

  ngOnInit(){
    if(!this.auth.loginStatus()){
      this.router.navigate(['/']);
    }
    this.getJobData(this.route.snapshot.paramMap.get('jobId'))
  }

  getJobData(id:any){
    fetch(this.getJobUrl+id).then((response)=>response.json()).then((data)=> {this.formData=data;console.log(this.formData)})
  }

  submitHandler() {
    if(this.formData.jobProfile.trim()==""){
      setTimeout(() => this.toastr.error('Job title can\'t be empty'))
    }
    else if(this.formData.skill.trim()==""){
      setTimeout(() => this.toastr.error('Skill can\'t be empty'))
    }
    else if(this.formData.exp_min>40||this.formData.exp_max>40){
      setTimeout(() => this.toastr.error('Experience can\'t be more than 40 yrs'))
    }
    else if(this.formData.exp_min>this.formData.exp_max){
      setTimeout(() => this.toastr.error('Min exp can\'t be greater than max exp'))
    }
    else
    {
      fetch(this.updateUrl, {
        method: 'PUT',
        body: JSON.stringify(this.formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          setTimeout(() => this.toastr.success('Updated Successfully'))
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
        input.value = "0"
        this.formData = { ...this.formData, [input.name]: 0 };
        return;
      }
      this.formData = { ...this.formData, [input.name]: parseInt(input.value) };
      return;
    }
    this.formData = { ...this.formData, [input.name]: input.value };
  }
}
