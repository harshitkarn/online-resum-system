import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.services';


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
  constructor(private router: Router, private auth:AuthService) {}

  ngOnInit(){
    if(!this.auth.loginStatus()){
      this.router.navigate(['/']);
    }
  }

  submitHandler() {
    console.log(this.formData);
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
