import { RegisterComponent } from './component/register/register.component';
import { HomeBootcampDetailComponent } from './component/home/home-bootcamp-detail/home-bootcamp-detail/home-bootcamp-detail.component';
import { LoginApplicantGuard } from './guards/applicantGuard/login-applicant.guard';
import { ApplicantNotificationComponent } from './component/userApplicant/applicant-notification/applicant-notification.component';
import { ApplicantBootcampComponent } from './component/userApplicant/applicant-bootcamp/applicant-bootcamp.component';
import { ApplicantPageComponent } from './component/userApplicant/applicant-page/applicant-page.component';
import { ApplicantComponent } from './pages/applicant/applicant.component';
import { InstructorApplicantComponent } from './component/userInstructor/instructor-applicant/instructor-applicant.component';
import { InstructorBootcampComponent } from './component/userInstructor/instructor-bootcamp/instructor-bootcamp.component';
import { InstructorPageComponent } from './component/userInstructor/instructor-page/instructor-page.component';
import { InstructorComponent } from './pages/instructor/instructor.component';
import { AdminPageComponent } from './component/admin/admin-page/admin-page.component';
import { InstructorLoginComponent } from './component/instructor/instructor-login/instructor-login.component';
import { ApplicantLoginComponent } from './component/applicant/applicant-login/applicant-login.component';
import { HomeContactComponent } from './component/home/home-contact/home-contact.component';
import { HomeAboutComponent } from './component/home/home-about/home-about.component';
import { HomeInstructorListComponent } from './component/home/home-instructor-list/home-instructor-list.component';
import { HomeBootcampListComponent } from './component/home/home-bootcamp-list/home-bootcamp-list.component';
import { HomePageComponent } from './component/home/home-page/home-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginEmployeGuard } from './guards/login-employe.guard';
import { EmployeeLoginComponent } from './component/employee/employee-login/employee-login.component';
import { BlacklistUpdateComponent } from './component/blacklist/blacklist-update/blacklist-update.component';
import { InstructorUpdateComponent } from './component/instructor/instructor-update/instructor-update.component';
import { EmployeeUpdateComponent } from './component/employee/employee-update/employee-update.component';
import { BootcampUpdateComponent } from './component/bootcamp/bootcamp-update/bootcamp-update.component';
import { ApplicantUpdateComponent } from './component/applicant/applicant-update/applicant-update.component';
import { ApplicationUpdateComponent } from './component/application/application-update/application-update.component';
import { ApplicationAddComponent } from './component/application/application-add/application-add.component';
import { InstructorAddComponent } from './component/instructor/instructor-add/instructor-add.component';
import { EmployeeAddComponent } from './component/employee/employee-add/employee-add.component';
import { ApplicantAddComponent } from './component/applicant/applicant-add/applicant-add.component';
import { BlacklistAddComponent } from './component/blacklist/blacklist-add/blacklist-add.component';
import { BlacklistDetailComponent } from './component/blacklist/black-list/blacklist-detail/blacklist-detail.component';
import { ApplicationDetailComponent } from './component/application/application-detail/application-detail.component';
import { EmployeeDetailComponent } from './component/employee/employee-detail/employee-detail.component';
import { EmployeListComponent } from './component/employee/employe-list/employe-list.component';
import { InstructorDetailComponent } from './component/instructor/instructor-detail/instructor-detail.component';
import { InstructorListComponent } from './component/instructor/instructor-list/instructor-list.component';
import { BootcampAddComponent } from './component/bootcamp/bootcamp-add/bootcamp-add.component';
import { BootcampDetailComponent } from './component/bootcamp/bootcamp-detail/bootcamp-detail.component';
import { ApplicantDetailComponent } from './component/applicant/applicant-detail/applicant-detail.component';
import { BootcampListComponent } from './component/bootcamp/bootcamp-list/bootcamp-list.component';
import { BlackListComponent } from './component/blacklist/black-list/black-list.component';
import { ApplicationListComponent } from './component/application/application-list/application-list.component';
import { ApplicantListComponent } from './component/applicant/applicant-list/applicant-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //home-admin-instructor-applicant pages
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'home-bootcamp', component: HomeBootcampListComponent },
      { path: 'home-instructor', component: HomeInstructorListComponent },
      { path: 'home-about', component: HomeAboutComponent },
      { path: 'home-contact', component: HomeContactComponent },
      { path: 'home-login-employee', component: EmployeeLoginComponent },
      { path: 'home-register', component: RegisterComponent },
      { path: 'home-login-instructor', component: InstructorLoginComponent },
      {
        path: 'home-login-employee/home-login-instructor',
        component: InstructorLoginComponent,
      },
      { path: 'home-login-applicant', component: ApplicantLoginComponent },
      {
        path: 'home-login-employee/home-login-applicant',
        component: ApplicantLoginComponent,
      },
      {
        path: 'home-login-employee/home-login-applicant/home-login-instructor',
        component: InstructorLoginComponent,
      },
      {
        path: 'home-login-employee/home-login-applicant/home-login-employee',
        component: InstructorLoginComponent,
      },
      {
        path: 'home-login-employee/home-login-instructor/home-login-employee',
        component: InstructorLoginComponent,
      },
      {
        path: 'home-login-employee/home-login-instructor/home-login-applicant',
        component: InstructorLoginComponent,
      },
      {
        path: 'home-bootcamp-detail/:id',
        component: HomeBootcampDetailComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoginEmployeGuard],
    children: [
      { path: '', component: AdminPageComponent },
      { path: 'admin-page', component: AdminPageComponent },
      { path: 'admin-applicant', component: ApplicantListComponent },
      { path: 'admin-employee', component: EmployeListComponent },
      { path: 'admin-instructor', component: InstructorListComponent },
      { path: 'admin-application', component: ApplicationListComponent },
      { path: 'admin-bootcamp', component: BootcampListComponent },
      { path: 'admin-blacklist', component: BlackListComponent },

      {
        path: 'admin-applicant/applicant-detail/:id',
        component: ApplicantDetailComponent,
      },
      {
        path: 'admin-applicant/applicant-add',
        component: ApplicantAddComponent,
      },
      {
        path: 'admin-applicant/applicant-update/:id',
        component: ApplicantUpdateComponent,
      },
      {
        path: 'admin-application/application-detail/:id',
        component: ApplicationDetailComponent,
      },
      {
        path: 'admin-application/application-add',
        component: ApplicationAddComponent,
      },
      {
        path: 'admin-application/application-update/:id',
        component: ApplicationUpdateComponent,
      },

      {
        path: 'admin-blacklist/blacklist-detail/:id',
        component: BlacklistDetailComponent,
      },
      {
        path: 'admin-applicant/blacklist-add/:id',
        component: BlacklistAddComponent,
      },
      {
        path: 'admin-blacklist/blacklist-update/:id',
        component: BlacklistUpdateComponent,
      },
      {
        path: 'admin-bootcamp/bootcamp-detail/:id',
        component: BootcampDetailComponent,
      },
      {
        path: 'admin-bootcamp/bootcamp-add',
        component: BootcampAddComponent,
      },
      {
        path: 'admin-bootcamp/bootcamp-update/:id',
        component: BootcampUpdateComponent,
      },
      {
        path: 'admin-instructor/instructor-detail/:id',
        component: InstructorDetailComponent,
      },
      {
        path: 'admin-instructor/instructor-add',
        component: InstructorAddComponent,
      },
      {
        path: 'admin-instructor/instructor-update/:id',
        component: InstructorUpdateComponent,
      },
      {
        path: 'admin-employee/employee-detail/:id',
        component: EmployeeDetailComponent,
      },
      {
        path: 'admin-employee/employee-add',
        component: EmployeeAddComponent,
      },
      {
        path: 'admin-employee/employee-update/:id',
        component: EmployeeUpdateComponent,
      },
    ],
    data: {
      role: 'roleEmployee',
    },
  },

  {
    path: 'instructor',
    component: InstructorComponent,
    children: [
      { path: '', component: InstructorPageComponent },
      { path: 'instructor-page', component: InstructorPageComponent },
      {
        path: 'instructor-bootcamp',
        component: InstructorBootcampComponent,
      },
      { path: 'instructor-applicant', component: InstructorApplicantComponent },
    ],
    data: {
      role: 'roleInstructor',
    },
  },

  {
    path: 'applicant',
    component: ApplicantComponent,
    children: [
      { path: '', component: ApplicantPageComponent },
      { path: 'applicant-page', component: ApplicantPageComponent },
      { path: 'applicant-bootcamp', component: ApplicantBootcampComponent },
      {
        path: 'applicant-notification',
        component: ApplicantNotificationComponent,
      },
    ],
    data: {
      role: 'roleApplicant',
    },
  },
  {
    path: 'employee-login',
    component: EmployeeLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
