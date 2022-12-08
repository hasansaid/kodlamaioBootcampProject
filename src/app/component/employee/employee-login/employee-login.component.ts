import { ToastrService } from 'ngx-toastr';
import { LoginEmployeeModel } from './../../../models/token/login-employee';
import { ITokenModel } from './../../../models/token/tokenModel';
import { LoginEmployeeService } from './../../../services/login-employee/login-employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css'],
})
export class EmployeeLoginComponent implements OnInit {
  loginEmployeeForm: FormGroup;
  tokenModel: ITokenModel;
  role: ITokenModel;
  constructor(
    private loginEmployeeService: LoginEmployeeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createLoginEmployeeForm();
  }

  createLoginEmployeeForm() {
    this.loginEmployeeForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginEmployee() {
    if (this.loginEmployeeForm.valid) {
      this.loginEmployeeService
        .loginEmployee(this.loginEmployeeForm.value)
        .subscribe((data) => {
          if (data) {
            this.toastrService.success('Giriş Başarılı');
            data[0].role == 'roleApplicant'
              ? this.router.navigate(['applicant'])
              : data[0].role == 'roleEmployee'
              ? this.router.navigate(['admin'])
              : this.router.navigate(['instructor']);
            console.log(data);

            localStorage.setItem('token', data[0].token);
            localStorage.setItem('role', data[0].role);
            localStorage.setItem('userId', data[0].id);
          } else {
            alert('Giriş Başarısız');
          }
        });
    }
  }

  // loginEmployee() {
  //   if (this.loginEmployeeForm.valid) {
  //     let loginModel: LoginEmployeeModel = this.loginEmployeeForm.value;
  //     this.loginEmployeeService.loginEmployee(loginModel).subscribe((data) => {
  //       if (data.length > 0) {
  //         this.tokenModel = data[0];
  //         localStorage.setItem('token', this.tokenModel.token);
  //         this.router.navigate(['admin']);
  //         alert('Giriş Başarılı');
  //       } else {
  //         alert('Başarısız');
  //       }
  //     });
  //   }
  // }
}
// this.loginEmployeeService
// .loginEmployee(this.loginEmployeeForm.value)
// .subscribe((data) => {
//   this.tokenModel = data[0];
//   localStorage.setItem('token', this.tokenModel.token);
// });
