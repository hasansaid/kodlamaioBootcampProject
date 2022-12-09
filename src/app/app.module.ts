import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
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
import { ApplicationUpdateComponent } from './component/application/application-update/application-update.component';
import { ApplicantUpdateComponent } from './component/applicant/applicant-update/applicant-update.component';
import { BootcampUpdateComponent } from './component/bootcamp/bootcamp-update/bootcamp-update.component';
import { EmployeeUpdateComponent } from './component/employee/employee-update/employee-update.component';
import { InstructorUpdateComponent } from './component/instructor/instructor-update/instructor-update.component';
import { BlacklistUpdateComponent } from './component/blacklist/blacklist-update/blacklist-update.component';
import { EmployeeLoginComponent } from './component/employee/employee-login/employee-login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomePageComponent } from './component/home/home-page/home-page.component';
import { HomeBootcampListComponent } from './component/home/home-bootcamp-list/home-bootcamp-list.component';
import { HomeInstructorListComponent } from './component/home/home-instructor-list/home-instructor-list.component';
import { HomeAboutComponent } from './component/home/home-about/home-about.component';
import { HomeContactComponent } from './component/home/home-contact/home-contact.component';
import { ApplicantLoginComponent } from './component/applicant/applicant-login/applicant-login.component';
import { InstructorLoginComponent } from './component/instructor/instructor-login/instructor-login.component';
import { HomeFooterComponent } from './component/home/home-footer/home-footer.component';
import { AdminPageComponent } from './component/admin/admin-page/admin-page.component';
import { ApplicantComponent } from './pages/applicant/applicant.component';
import { InstructorComponent } from './pages/instructor/instructor.component';
import { InstructorPageComponent } from './component/userInstructor/instructor-page/instructor-page.component';
import { InstructorBootcampComponent } from './component/userInstructor/instructor-bootcamp/instructor-bootcamp.component';
import { InstructorApplicantComponent } from './component/userInstructor/instructor-applicant/instructor-applicant.component';
import { ApplicantPageComponent } from './component/userApplicant/applicant-page/applicant-page.component';
import { ApplicantBootcampComponent } from './component/userApplicant/applicant-bootcamp/applicant-bootcamp.component';
import { ApplicantNotificationComponent } from './component/userApplicant/applicant-notification/applicant-notification.component';
import { AdminSidebarComponent } from './component/admin/admin-sidebar/admin-sidebar/admin-sidebar.component';
import { HomeBootcampDetailComponent } from './component/home/home-bootcamp-detail/home-bootcamp-detail/home-bootcamp-detail.component';
import { BootcampfilterPipe } from './pipes/bootcampfilter.pipe';
import { InstructorfilterPipe } from './pipes/instructorfilter.pipe';
import { EmployeefilterPipe } from './pipes/employeefilter.pipe';
import { BlacklistfilterPipe } from './pipes/blacklistfilter.pipe';
import { ApplicationfilterPipe } from './pipes/applicationfilter.pipe';
import { ApplicantfilterPipe } from './pipes/applicantfilter.pipe';
import { RegisterComponent } from './component/register/register.component';

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
    ApplicationUpdateComponent,
    ApplicantUpdateComponent,
    BootcampUpdateComponent,
    EmployeeUpdateComponent,
    InstructorUpdateComponent,
    BlacklistUpdateComponent,
    EmployeeLoginComponent,
    HomeComponent,
    AdminComponent,
    HomePageComponent,
    HomeBootcampListComponent,
    HomeInstructorListComponent,
    HomeAboutComponent,
    HomeContactComponent,
    ApplicantLoginComponent,
    InstructorLoginComponent,
    HomeFooterComponent,
    AdminPageComponent,
    ApplicantComponent,
    InstructorComponent,
    InstructorPageComponent,
    InstructorBootcampComponent,
    InstructorApplicantComponent,
    ApplicantPageComponent,
    ApplicantBootcampComponent,
    ApplicantNotificationComponent,
    AdminSidebarComponent,
    HomeBootcampDetailComponent,
    BootcampfilterPipe,
    InstructorfilterPipe,
    EmployeefilterPipe,
    BlacklistfilterPipe,
    ApplicationfilterPipe,
    ApplicantfilterPipe,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
