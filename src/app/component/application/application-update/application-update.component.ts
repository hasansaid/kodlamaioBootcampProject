import { ICreateApplicationRequest } from './../../../models/request/application/createApplicationRequest';
import { ICreateApplicantRequest } from './../../../models/request/applicant/createApplicantRequest';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { IGetAllBootcampResponse } from './../../../models/response/bootcamp/getAllBootcampResponse';
import { IGetAllApplicantResponse } from './../../../models/response/applicant/getAllApplicantResponse';
import { IGetApplicationResponse } from './../../../models/response/application/getApplicationResponse';
import { IUpdateApplicationRequest } from './../../../models/request/application/updateApplicationRequest';
import { ApplicationService } from './../../../services/application/application.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-application-update',
  templateUrl: './application-update.component.html',
  styleUrls: ['./application-update.component.css'],
})
export class ApplicationUpdateComponent implements OnInit {
  applicationUpdateForm: FormGroup;
  application: IUpdateApplicationRequest;
  applicants: IGetAllApplicantResponse[] = [];
  bootcamps: IGetAllBootcampResponse[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private applicationService: ApplicationService,
    private toastrService: ToastrService,
    private applicantService: ApplicantService,
    private bootcampService: BootcampService
  ) {}

  ngOnInit(): void {
    this.getApplicantAll();
  }

  getApplicantAll() {
    this.applicantService
      .getAllApplicant()
      .subscribe((data) => (this.applicants = data));
    this.getByIdApplication();
    this.getBootcampAll();
  }
  getBootcampAll() {
    this.bootcampService
      .getAllBootcamp()
      .subscribe((data) => (this.bootcamps = data));
  }

  createApplicationUpdateForm() {
    this.applicationUpdateForm = this.formBuilder.group({
      userId: [this.application.userId, Validators.required],
      bootcampId: [this.application.bootcampId, Validators.required],
      state: [this.application.state, Validators.required],
    });
  }

  getApplication(id: number) {
    this.applicationService.getApplication(id).subscribe((data) => {
      this.application = data;
      this.createApplicationUpdateForm();
    });
  }
  getByIdApplication() {
    this.activatedRoute.params.subscribe((params) => {
      this.getApplication(params['id']);
    });
  }
  

  updateApplication() {
    if (this.applicationUpdateForm.valid) {
      let application: ICreateApplicationRequest = Object.assign(
        {},
        this.applicationUpdateForm.value
      );
      this.bootcampService
        .getBootcamp(application.bootcampId)
        .subscribe((data) => {
          application.bootcampName = data.name;
          this.applicantService
            .getApplicant(application.userId)
            .subscribe((data) => {
              application.userName = data.firstName + ' ' + data.lastName;
              this.applicationService
                .updateApplication(
                  this.activatedRoute.snapshot.params['id'],
                  application
                )
                .subscribe((data) => {
                  this.toastrService.success('Güncellemeniz Gerçekleşmiştir');
                });
            });
        });
    } else {
      this.toastrService.error('Dikkat Form Eksik!!!');
    }
  }
}
