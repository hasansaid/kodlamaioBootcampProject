import { Router } from '@angular/router';
import { LoginEmployeeService } from './../../../../services/login-employee/login-employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css'],
})
export class AdminSidebarComponent implements OnInit {
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
