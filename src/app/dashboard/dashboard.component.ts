import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/utils/cookie.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private url: string = 'http://localhost:8085/getAllJobs';
  jobs:any;
  constructor( private router: Router, private cookieService:CookieService) { }


    async ngOnInit(){
      if(!await this.cookieService.checkAuth()){
        this.router.navigate(['/login']);
  
    }else  this.loadData()
  }


  public loadData(){
    fetch(this.url)
      .then((response) => response.json())
      .then((quotesData)=>{
        this.jobs = quotesData;
        console.log(this.jobs);
      })
  }

}
