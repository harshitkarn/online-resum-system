import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'src/utils/cookie.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  private getJobUrl = 'http://localhost:8085/getJobById/';
  formData = {
    jobProfile: '',
    skill: '',
    exp_min: 0,
    exp_max: 0,
    salary: 0,
    jobId:0
  };

  constructor(private router: Router, private route: ActivatedRoute, private cookieService:CookieService) { }

  async ngOnInit(){
    if(!await this.cookieService.checkAuth()){
      this.router.navigate(['/login']);

    }
    this.getJobData(this.route.snapshot.paramMap.get('jobId'))
  }

  getJobData(id:any){
    fetch(this.getJobUrl+id).then((response)=>response.json()).then((data)=> {this.formData=data;console.log(this.formData)})
  }

}
