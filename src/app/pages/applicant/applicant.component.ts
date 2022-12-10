import { LoginEmployeeService } from './../../services/login-employee/login-employee.service';
import { LoginApplicantService } from './../../services/login-applicant/login-applicant.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css'],
})
export class ApplicantComponent implements OnInit {
  name = localStorage.getItem('fullname');
  constructor(
    private loginEmployeeService: LoginEmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  logout() {
    this.loginEmployeeService.logout();
    this.router.navigate(['']);
  }
}
