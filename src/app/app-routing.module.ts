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
  //applicant
  { path: '', component: ApplicantListComponent },
  { path: '', pathMatch: 'full', component: ApplicantListComponent },
  { path: 'applicant-list', component: ApplicantListComponent },
  { path: 'applicant-detail/:id', component: ApplicantDetailComponent },
  { path: 'applicant-add', component: ApplicantAddComponent },
  { path: 'applicant-update/:id', component: ApplicantUpdateComponent },

  //
  //application
  { path: 'application-list', component: ApplicationListComponent },
  { path: 'application-detail/:id', component: ApplicationDetailComponent },
  { path: 'application-add', component: ApplicationAddComponent },
  { path: 'application-update/:id', component: ApplicationUpdateComponent },

  //
  //blackList
  { path: 'black-list', component: BlackListComponent },
  { path: 'blacklist-detail/:id', component: BlacklistDetailComponent },
  { path: 'blacklist-add', component: BlacklistAddComponent },
  { path: 'blacklist-update/:id', component: BlacklistUpdateComponent },
  //
  //bootcamp
  { path: 'bootcamp-list', component: BootcampListComponent },
  { path: 'bootcamp-detail/:id', component: BootcampDetailComponent },
  { path: 'bootcamp-add', component: BootcampAddComponent },
  { path: 'bootcamp-update/:id', component: BootcampUpdateComponent },

  //
  //instructor
  { path: 'instructor-list', component: InstructorListComponent },
  { path: 'instructor-detail/:id', component: InstructorDetailComponent },
  { path: 'instructor-add', component: InstructorAddComponent },
  { path: 'instructor-update/:id', component: InstructorUpdateComponent },

  //
  //employee
  { path: 'employee-list', component: EmployeListComponent },
  { path: 'employee-detail/:id', component: EmployeeDetailComponent },
  { path: 'employee-add', component: EmployeeAddComponent },
  { path: 'employee-update/:id', component: EmployeeUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
