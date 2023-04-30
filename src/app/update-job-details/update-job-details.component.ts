import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'src/utils/cookie.service';


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
  constructor(private router: Router, private route: ActivatedRoute, private cookieService:CookieService) {}

  async ngOnInit(){
    if(!await this.cookieService.checkAuth()){
      this.router.navigate(['/login']);

    }
    this.getJobData(this.route.snapshot.paramMap.get('jobId'))
  }

  getJobData(id:any){
fetch(this.getJobUrl+id).then((response)=>response.json()).then((data)=> {this.formData=data;console.log(this.formData)})
  }

  submitHandler() {
    console.log(this.formData);
    fetch(this.updateUrl, {
      method: 'PUT',
      body: JSON.stringify(this.formData),
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then(() => {
        this.router.navigate(['/dashboard']);
      });
  }

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (['exp_min', 'exp_max', 'salary'].includes(input.name)) {
      this.formData = { ...this.formData, [input.name]: parseInt(input.value) };
      return;
    }
    this.formData = { ...this.formData, [input.name]: input.value };
  }
}
