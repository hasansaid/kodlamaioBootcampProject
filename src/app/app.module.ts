import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './component/navi/navi.component';
import { ApplicantListComponent } from './component/applicant/applicant-list/applicant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlackListComponent } from './component/blacklist/black-list/black-list.component';
import { ApplicationListComponent } from './component/application/application-list/application-list.component';
import { BootcampListComponent } from './component/bootcamp/bootcamp-list/bootcamp-list.component';
import { ApplicantDetailComponent } from './component/applicant/applicant-detail/applicant-detail.component';
import { BootcampDetailComponent } from './component/bootcamp/bootcamp-detail/bootcamp-detail.component';
import { BootcampAddComponent } from './component/bootcamp/bootcamp-add/bootcamp-add.component';
import { InstructorListComponent } from './component/instructor/instructor-list/instructor-list.component';
import { InstructorDetailComponent } from './component/instructor/instructor-detail/instructor-detail.component';
import { EmployeListComponent } from './component/employee/employe-list/employe-list.component';
import { EmployeeDetailComponent } from './component/employee/employee-detail/employee-detail.component';
import { ApplicationDetailComponent } from './component/application/application-detail/application-detail.component';
import { BlacklistAddComponent } from './component/blacklist/blacklist-add/blacklist-add.component';
import { BlacklistDetailComponent } from './component/blacklist/black-list/blacklist-detail/blacklist-detail.component';

import { ApplicantAddComponent } from './component/applicant/applicant-add/applicant-add.component';
import { EmployeeAddComponent } from './component/employee/employee-add/employee-add.component';
import { InstructorAddComponent } from './component/instructor/instructor-add/instructor-add.component';
import { ApplicationAddComponent } from './component/application/application-add/application-add.component';
@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    ApplicantListComponent,
    BlackListComponent,
    ApplicationListComponent,
    BootcampListComponent,
    ApplicantDetailComponent,
    BootcampDetailComponent,
    BootcampAddComponent,
    InstructorListComponent,
    InstructorDetailComponent,
    EmployeListComponent,
    EmployeeDetailComponent,
    ApplicationDetailComponent,
    BlacklistAddComponent,
    ApplicantAddComponent,
    EmployeeAddComponent,
    BlacklistDetailComponent,
    InstructorAddComponent,
    ApplicationAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
