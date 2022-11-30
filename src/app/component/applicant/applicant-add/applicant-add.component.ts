import { ApplicantService } from './../../../services/applicant/applicant.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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
    private applicantService: ApplicantService
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
    });
  }

  add() {
    if (this.applicantForm.valid) {
      let applicantModel = Object.assign({}, this.applicantForm.value);
      this.applicantService.addApplicant(applicantModel).subscribe((data) => {
        alert('Aday Eklendi');
      });
    } else {
      alert('Aday Eklenemedi Kontol Et');
    }
  }
}
