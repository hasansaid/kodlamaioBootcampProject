import { IGetAllApplicantResponse } from './../../../models/response/applicant/getAllApplicantResponse';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css'],
})
export class ApplicantListComponent implements OnInit {
  applicants: IGetAllApplicantResponse[] = [];

  constructor(
    private applicantService: ApplicantService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getAllApplicant());
  }

  getAllApplicant() {
    this.applicantService
      .getAllApplicant()
      .subscribe((data) => (this.applicants = data));
  }
  deleteApplicant(applicant: IGetAllApplicantResponse) {
    this.applicants = this.applicants.filter((a) => a !== applicant);
    this.applicantService.deleteApplicant(applicant).subscribe();
    this.toastrService.error('Aday Silindi');
  }
}
