import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { JobItemComponent } from './job-item/job-item.component';
import { AddJobDetailsComponent } from './add-job-details/add-job-details.component';
import { UpdateJobDetailsComponent } from './update-job-details/update-job-details.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ResumeComponent } from './resume/resume.component';
import { ResumeDetailsComponent } from './resume-details/resume-details.component';
import { ResumeComponentComponent } from './resume-component/resume-component.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    JobItemComponent,
    AddJobDetailsComponent,
    UpdateJobDetailsComponent,
    JobDetailsComponent,
    ResumeComponent,
    ResumeDetailsComponent,
    ResumeComponentComponent,
    SafePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
