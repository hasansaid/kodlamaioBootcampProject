import { IGetApplicantResponse } from './../../../models/response/applicant/getApplicantResponse';
import { ActivatedRoute } from '@angular/router';
import { IGetAllApplicantResponse } from './../../../models/response/applicant/getAllApplicantResponse';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-detail',
  templateUrl: './applicant-detail.component.html',
  styleUrls: ['./applicant-detail.component.css'],
})
export class ApplicantDetailComponent implements OnInit {
  applicant: IGetApplicantResponse;
  constructor(
    private applicantService: ApplicantService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.getApplicant(params['id'])
    );
  }

  getApplicant(id: number) {
    this.applicantService
      .getApplicant(id)
      .subscribe((data) => (this.applicant = data));
  }
}
