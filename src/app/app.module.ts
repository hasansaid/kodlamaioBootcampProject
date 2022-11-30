import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './component/navi/navi.component';
import { ApplicantListComponent } from './component/applicant/applicant-list/applicant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BlackListComponent } from './component/blacklist/black-list/black-list.component';
import { ApplicationListComponent } from './component/application/application-list/application-list.component';
import { BootcampListComponent } from './component/bootcamp/bootcamp-list/bootcamp-list.component';
@NgModule({
  declarations: [AppComponent, NaviComponent, ApplicantListComponent, BlackListComponent, ApplicationListComponent, BootcampListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
