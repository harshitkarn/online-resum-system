import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.services';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private url: string = 'http://localhost:8085/getAllJobs';
  jobs:any;
  constructor( private router: Router, private auth:AuthService) { }


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
        this.jobs = quotesData;
      })
  }

}
