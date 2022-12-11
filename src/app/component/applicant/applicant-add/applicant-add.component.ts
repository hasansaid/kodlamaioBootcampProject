import { ApplicantService } from './../../../services/applicant/applicant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-applicant-add',
  templateUrl: './applicant-add.component.html',
  styleUrls: ['./applicant-add.component.css'],
})
export class ApplicantAddComponent implements OnInit {
  applicantForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private applicantService: ApplicantService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createApplicationForm();
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
      state: [1],
    });
  }

  // add() {
  //   if (this.applicantForm.valid) {
  //     let applicantModel = Object.assign({}, this.applicantForm.value);
  //     this.applicantService.addApplicant(applicantModel).subscribe((data) => {
  //       this.toastrService.success('Aday Ekleme Başarılı');
  //       this.router.navigate(['/admin/admin-applicant']);
  //     });
  //   } else {
  //     this.toastrService.warning('Form Eksik!!!');
  //   }
  // }
}
