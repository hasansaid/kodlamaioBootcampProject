import { IGetAllApplicantResponse } from './../../../models/response/applicant/getAllApplicantResponse';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css'],
})
export class ApplicantListComponent implements OnInit {
  applicants: IGetAllApplicantResponse[] = [];

  constructor(
    private applicantService: ApplicantService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getAllApplicant());
  }

  getAllApplicant() {
    this.applicantService
      .getAllApplicant()
      .subscribe((data) => (this.applicants = data));
  }
}
