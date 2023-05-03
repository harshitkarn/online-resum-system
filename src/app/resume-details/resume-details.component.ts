import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-resume-details',
  templateUrl: './resume-details.component.html',
  styleUrls: ['./resume-details.component.css']
})
export class ResumeDetailsComponent implements OnInit {
  private getResumeUrl = 'http://localhost:8085/getResumeById/';
  formData = {
    username: '',
    name: '',
    email: '',
    mobileNo: '',
    address: '',
    resumeUrl:''
  };

  dataLoaded = false;

  constructor(private router: Router, private route: ActivatedRoute, private auth:AuthService) { }

  ngOnInit(){
    if(!this.auth.loginStatus()){
      this.router.navigate(['/']);
    }
    this.getResumeData(this.route.snapshot.paramMap.get('resumeId'))
  }

  getResumeData(id:any){
    fetch(this.getResumeUrl+id).then((response)=>response.json()).then((data)=> {this.formData=data;console.log(this.formData);this.dataLoaded=true;})
  }

}
