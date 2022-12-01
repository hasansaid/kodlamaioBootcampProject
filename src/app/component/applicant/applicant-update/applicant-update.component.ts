import { ApplicantService } from './../../../services/applicant/applicant.service';
import { ActivatedRoute } from '@angular/router';
import { IUpdateApplicantRequest } from './../../../models/request/applicant/updateApplicantRequest';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-applicant-update',
  templateUrl: './applicant-update.component.html',
  styleUrls: ['./applicant-update.component.css'],
})
export class ApplicantUpdateComponent implements OnInit {
  applicantUpdateForm: FormGroup;
  applicant: IUpdateApplicantRequest;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private applicantService: ApplicantService
  ) {}

  ngOnInit(): void {
    this.getByIdApplicant();
  }

  createApplicantUpdateForm() {
    this.applicantUpdateForm = this.formBuilder.group({
      id: [this.applicant.id, Validators.required],
      firstName: [this.applicant.firstName, Validators.required],
      lastName: [this.applicant.lastName, Validators.required],
      email: [this.applicant.email, Validators.required],
      password: [this.applicant.password, Validators.required],
      about: [this.applicant.about, Validators.required],
      nationalIdentity: [this.applicant.nationalIdentity, Validators.required],
      dateOfBirth: [this.applicant.dateOfBirth, Validators.required],
    });
  }

  getApplicant(id: number) {
    this.applicantService.getApplicant(id).subscribe((data) => {
      this.applicant = data;
      this.createApplicantUpdateForm();
    });
  }
  getByIdApplicant() {
    this.activatedRoute.params.subscribe((params) => {
      this.getApplicant(params['id']);
    });
  }
  updateApplicant() {
    this.applicantService
      .updateApplicant(
        this.activatedRoute.snapshot.params['id'],
        this.applicantUpdateForm.value
      )
      .subscribe();
  }
}
