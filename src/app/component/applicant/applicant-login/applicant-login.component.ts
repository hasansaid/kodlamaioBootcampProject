import { LoginApplicantModel } from './../../../models/token/login-applicant';
import { LoginEmployeeModel } from './../../../models/token/login-employee';
import { Router } from '@angular/router';
import { LoginApplicantService } from './../../../services/login-applicant/login-applicant.service';
import { ITokenModel } from './../../../models/token/tokenModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicant-login',
  templateUrl: './applicant-login.component.html',
  styleUrls: ['./applicant-login.component.css'],
})
export class ApplicantLoginComponent implements OnInit {
  loginApplicantForm: FormGroup;
  tokenModel: ITokenModel;

  constructor(
    private loginApplicantService: LoginApplicantService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createLoginApplicantForm();
  }

  createLoginApplicantForm() {
    this.loginApplicantForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginApplicant() {
    if (this.loginApplicantForm.valid) {
      let loginModel: LoginApplicantModel = this.loginApplicantForm.value;
      this.loginApplicantService
        .loginApplicant(loginModel)
        .subscribe((data) => {
          if (data.length > 0) {
            this.tokenModel = data[0];
            localStorage.setItem('token', this.tokenModel.token);
            this.router.navigate(['applicant']);
            alert('Giriş Başarılı Yönlendiriliyorsunuz.');
          } else {
            alert('Giriş Başarısız Tekrar Deneyiniz');
          }
        });
    }
  }
}
