import { LoginEmployeeService } from './../../services/login-employee/login-employee.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css'],
})
export class InstructorComponent implements OnInit {
  name = localStorage.getItem('name') + ' ' + localStorage.getItem('lastName');
  image = localStorage.getItem('image');
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
