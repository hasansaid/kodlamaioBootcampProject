import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from './../../../services/application/application.service';
import { IGetAllApplicationResponse } from './../../../models/response/application/getAllApplicationResponse';
import { Component, OnInit } from '@angular/core';
import { IGetApplicantResponse } from 'src/app/models/response/applicant/getApplicantResponse';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css'],
})
export class ApplicationListComponent implements OnInit {
  applications: IGetAllApplicationResponse[] = [];

  constructor(
    private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getAllApplication());
  }

  getAllApplication() {
    this.applicationService
      .getAllApplication()
      .subscribe((data) => (this.applications = data));
  }
  deleteApplication(applications: IGetAllApplicationResponse) {
    this.applications = this.applications.filter((a) => a !== applications);
    this.applicationService.deleteApplication(applications).subscribe();
  }

  // getApplication(id: number) {
  //   this.applicationService
  //     .getApplication(id)
  //     .subscribe((data) => (this.applications = data));
  // }
}
