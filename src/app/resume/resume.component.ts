import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  private url: string = 'http://localhost:8085/getAllResumes';
  resumes:any;
  resumeFilter:any;
  searchOpen = false;

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit(){
    if(!this.auth.loginStatus()){
      this.router.navigate(['/']);
    }
    this.loadData();
  }


  public loadData(){
    fetch(this.url)
      .then((response) => response.json())
      .then((quotesData)=>{
        this.resumes = quotesData;
        this.resumeFilter = quotesData;
      })
  }

  openSearch(){
    this.searchOpen = true;
  }

  closeSearch(){
    this.searchOpen = false;
    this.resumeFilter = this.resumes;
  }

  filterResumes(event: Event){
    const input = event.target as HTMLInputElement;
    this.resumeFilter = this.resumes.filter(function (el:any) {
      return el.name.toLowerCase().startsWith(input.value.toLowerCase())
    });
    
  }

}


