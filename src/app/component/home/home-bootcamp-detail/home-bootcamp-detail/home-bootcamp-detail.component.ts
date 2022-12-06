import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IGetBootcampResponse } from 'src/app/models/response/bootcamp/getBootcampResponse';
import { ApplicantService } from 'src/app/services/applicant/applicant.service';
import { BootcampService } from 'src/app/services/bootcamp/bootcamp.service';

@Component({
  selector: 'app-home-bootcamp-detail',
  templateUrl: './home-bootcamp-detail.component.html',
  styleUrls: ['./home-bootcamp-detail.component.css'],
})
export class HomeBootcampDetailComponent implements OnInit {
  bootcamp: IGetBootcampResponse;
  applicantForm: FormGroup;
  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private applicantService: ApplicantService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createApplicationForm();
    this.activatedRoute.params.subscribe((params) =>
      this.getBootcamp(params['id'])
    );
  }

  getBootcamp(id: number) {
    this.bootcampService.getBootcamp(id).subscribe((data) => {
      this.bootcamp = data;
    });
  }
  createApplicationForm() {
    this.applicantForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      nationalIdentity: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      about: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
  add() {
    if (this.applicantForm.valid) {
      let applicantModel = Object.assign({}, this.applicantForm.value);
      this.applicantService.addApplicant(applicantModel).subscribe((data) => {
        this.toastrService.success('Başvurunuz Gönderildi');
        this.router.navigate(['/home-bootcamp']);
      });
    } else {
      this.toastrService.warning('Form Eksik!!!');
    }
  }
}
