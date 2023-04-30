import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddJobDetailsComponent } from './add-job-details/add-job-details.component';
import { UpdateJobDetailsComponent } from './update-job-details/update-job-details.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'addNewJob', component:AddJobDetailsComponent},
  {path:'updateJob/:jobId', component:UpdateJobDetailsComponent},
  {path:'getJobDetail/:jobId', component:JobDetailsComponent},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
