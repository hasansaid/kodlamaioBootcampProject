import { IGetAllApplicantResponse } from './../../../models/response/applicant/getAllApplicantResponse';
import { InstructorService } from './../../../services/instructor/instructor.service';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { IGetAllBootcampResponse } from './../../../models/response/bootcamp/getAllBootcampResponse';
import { ApplicationService } from './../../../services/application/application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-application-add',
  templateUrl: './application-add.component.html',
  styleUrls: ['./application-add.component.css'],
})
export class ApplicationAddComponent implements OnInit {
  applicationAddForm: FormGroup;
  bootcamps: IGetAllBootcampResponse[] = [];
  applicants: IGetAllApplicantResponse[] = [];
  constructor(
    private applicationService: ApplicationService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router,
    private bootcampService: BootcampService,
    private applicantService: ApplicantService
  ) {}

  ngOnInit(): void {
    this.getBootcampAll();
  }
  getBootcampAll() {
    this.bootcampService
      .getAllBootcamp()
      .subscribe((data) => (this.bootcamps = data));
    this.createApplicationAddForm();
    this.getApplicantAll();
  }
  getApplicantAll() {
    this.applicantService
      .getAllApplicant()
      .subscribe((data) => (this.applicants = data));
  }

  createApplicationAddForm() {
    this.applicationAddForm = this.formBuilder.group({
      userId: ['', Validators.required],
      bootcampId: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

  add() {
    if (this.applicationAddForm.valid) {
      let applicationModel = Object.assign({}, this.applicationAddForm.value);
      this.bootcampService
        .getBootcamp(applicationModel.bootcampId)
        .subscribe((data) => {
          applicationModel.bootcampName = data.name;
          this.applicantService
            .getApplicant(applicationModel.userId)
            .subscribe((data) => {
              applicationModel.userName = data.firstName + ' ' + data.lastName;
              this.applicationService
                .addApplication(applicationModel)
                .subscribe((data) => {
                  this.toastrService.success('Başvuru Eklendi');
                  this.router.navigate(['/admin/admin-application']);
                });
            });
        });
    } else {
      this.toastrService.warning('Form Eksik!!');
    }
  }
}
