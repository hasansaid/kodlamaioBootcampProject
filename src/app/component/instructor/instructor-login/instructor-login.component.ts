import { LoginInstructorModel } from './../../../models/token/login-instructor';
import { Router } from '@angular/router';
import { LoginInstructorService } from './../../../services/login-instructor/login-instructor.service';
import { ITokenModel } from './../../../models/token/tokenModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-login',
  templateUrl: './instructor-login.component.html',
  styleUrls: ['./instructor-login.component.css'],
})
export class InstructorLoginComponent implements OnInit {
  loginInstructorForm: FormGroup;
  tokenModel: ITokenModel;

  constructor(
    private loginInstructorService: LoginInstructorService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createLoginInstructorForm();
  }

  createLoginInstructorForm() {
    this.loginInstructorForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  loginInstructor() {
    if (this.loginInstructorForm.valid) {
      let loginModel: LoginInstructorModel = this.loginInstructorForm.value;
      this.loginInstructorService
        .loginInstructor(loginModel)
        .subscribe((data) => {
          if (data.length > 0) {
            this.tokenModel = data[0];
            localStorage.setItem('token', this.tokenModel.token);
            this.router.navigate(['instructor']);
            alert('Giriş Başarılı Yönlendiriliyorsunız.');
          } else {
            alert('Giriş Başarısız Tekrar Deneyiniz.');
          }
        });
    }
  }
}
