import { IGetApplicationResponse } from './../../../models/response/application/getApplicationResponse';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from './../../../services/application/application.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css'],
})
export class ApplicationDetailComponent implements OnInit {
  applications: IGetApplicationResponse[] = [];
  constructor(
    private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.getApplication(params['id'])
    );
  }

  getApplication(id: number) {
    this.applicationService
      .getApplication(id)
      .subscribe((data) => (this.applications = data));
  }
}
