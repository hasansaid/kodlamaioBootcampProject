import { LoginEmployeeService } from './../../../../services/login-employee/login-employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsivenavbar',
  templateUrl: './responsivenavbar.component.html',
  styleUrls: ['./responsivenavbar.component.css'],
})
export class ResponsivenavbarComponent implements OnInit {
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
