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
  //
  //application
  { path: 'application-list', component: ApplicationListComponent },
  //
  //blackList
  { path: 'black-list', component: BlackListComponent },
  //
  //bootcamp
  { path: 'bootcamp-list', component: BootcampListComponent },
  //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
