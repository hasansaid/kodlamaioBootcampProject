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
  //applicant
  { path: '', component: ApplicantListComponent },
  { path: '', pathMatch: 'full', component: ApplicantListComponent },
  { path: 'applicant-list', component: ApplicantListComponent },
  { path: 'applicant-detail/:id', component: ApplicantDetailComponent },
  { path: 'applicant-add', component: ApplicantAddComponent },
  //
  //application
  { path: 'application-list', component: ApplicationListComponent },
  { path: 'application-detail/:id', component: ApplicationDetailComponent },
  { path: 'application-add', component: ApplicationAddComponent },

  //
  //blackList
  { path: 'black-list', component: BlackListComponent },
  { path: 'blacklist-detail/:id', component: BlacklistDetailComponent },
  { path: 'blacklist-add', component: BlacklistAddComponent },
  //
  //bootcamp
  { path: 'bootcamp-list', component: BootcampListComponent },
  { path: 'bootcamp-detail/:id', component: BootcampDetailComponent },
  { path: 'bootcamp-add', component: BootcampAddComponent },

  //
  //instructor
  { path: 'instructor-list', component: InstructorListComponent },
  { path: 'instructor-detail/:id', component: InstructorDetailComponent },
  { path: 'instructor-add', component: InstructorAddComponent },

  //
  //employee
  { path: 'employee-list', component: EmployeListComponent },
  { path: 'employee-detail/:id', component: EmployeeDetailComponent },
  { path: 'employee-add', component: EmployeeAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
